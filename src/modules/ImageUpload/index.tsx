"use client";


import { useState, useCallback, ComponentProps, forwardRef, useRef } from 'react';
import Image from 'next/image';
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import cx from 'clsx';
import { useShowToast } from '@/components/Toast';
import { SIZE_MB } from '@/utils/constants';

interface ImageUploadProps extends ComponentProps<'input'> {
   defaultValue?: string;
   cropAspectRatio?: number; // e.g., 1 for square, 16/9 for widescreen
   outputSize?: { width: number; height: number }; // final output size
}

const ImageUpload: React.FC<ImageUploadProps> = forwardRef(({ 
   className, 
   onChange, 
   onBlur, 
   name, 
   defaultValue,
   cropAspectRatio = 1, // default to square
   outputSize = { width: 200, height: 200 }
}, domRef) => {
   const [originalImage, setOriginalImage] = useState<string | null>(null);
   const [croppedImage, setCroppedImage] = useState<string | null>(defaultValue ?? null);
   const [crop, setCrop] = useState<Crop>();
   const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
   const [showCropModal, setShowCropModal] = useState(false);
   const [originalFile, setOriginalFile] = useState<File | null>(null);
   const [rotation, setRotation] = useState(0); // Rotation angle in degrees
   
   const imgRef = useRef<HTMLImageElement>(null);
   const showToast = useShowToast();

   // Initialize crop when image loads
   const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget;
      const crop = centerCrop(
         makeAspectCrop(
            {
               unit: '%',
               width: 80,
            },
            cropAspectRatio,
            width,
            height,
         ),
         width,
         height,
      );
      setCrop(crop);
   }, [cropAspectRatio]);

   // Rotate image by 90 degrees
   const rotateImage = useCallback((degrees: number) => {
      setRotation(prev => (prev + degrees) % 360);
      // Reset crop when rotating to avoid confusion
      if (imgRef.current) {
         const { width, height } = imgRef.current;
         const crop = centerCrop(
            makeAspectCrop(
               {
                  unit: '%',
                  width: 80,
               },
               cropAspectRatio,
               width,
               height,
            ),
            width,
            height,
         );
         setCrop(crop);
      }
   }, [cropAspectRatio]);

   // Convert crop to canvas and create blob with rotation
   const getCroppedImg = useCallback(async (
      image: HTMLImageElement,
      crop: PixelCrop,
      rotation: number,
   ): Promise<Blob | null> => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
         throw new Error('No 2d context');
      }

      // Calculate scale factors
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      // Set canvas size to desired output size
      canvas.width = outputSize.width;
      canvas.height = outputSize.height;

      // Clear canvas
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Save the context state
      ctx.save();

      // Move to center of canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Apply rotation
      ctx.rotate((rotation * Math.PI) / 180);

      // Calculate the cropped area in natural image coordinates
      const cropX = crop.x * scaleX;
      const cropY = crop.y * scaleY;
      const cropWidth = crop.width * scaleX;
      const cropHeight = crop.height * scaleY;

      // Draw the cropped and rotated image
      ctx.drawImage(
         image,
         cropX,
         cropY,
         cropWidth,
         cropHeight,
         -outputSize.width / 2,
         -outputSize.height / 2,
         outputSize.width,
         outputSize.height,
      );

      // Restore the context state
      ctx.restore();

      return new Promise((resolve) => {
         canvas.toBlob(resolve, 'image/jpeg', 0.9);
      });
   }, [outputSize]);

   // Handle initial file selection
   const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         if (file.size > SIZE_MB) {
            showToast({ type: 'failed', content: 'File size exceeds 1MB' });
            return;
         }

         setOriginalFile(file);
         const imageUrl = URL.createObjectURL(file);
         setOriginalImage(imageUrl);
         setRotation(0); // Reset rotation
         setShowCropModal(true);
      }
   }, [showToast]);

   // Handle crop confirmation
   const handleCropConfirm = useCallback(async () => {
      if (!imgRef.current || !completedCrop || !originalFile) {
         return;
      }

      try {
         const croppedBlob = await getCroppedImg(imgRef.current, completedCrop, rotation);
         
         if (croppedBlob) {
            // Create cropped file
            const croppedFile = new File([croppedBlob], originalFile.name, {
               type: originalFile.type,
               lastModified: Date.now(),
            });

            // Create preview URL
            const croppedUrl = URL.createObjectURL(croppedBlob);
            setCroppedImage(croppedUrl);

            // Update input with cropped file
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(croppedFile);
            
            const inputElement = document.getElementById('imageInput') as HTMLInputElement;
            if (inputElement) {
               inputElement.files = dataTransfer.files;
               
               // Trigger onChange event
               const event = new Event('change', { bubbles: true });
               Object.defineProperty(event, 'target', {
                  writable: false,
                  value: inputElement
               });
               onChange?.(event as any);
            }
         }
         
         setShowCropModal(false);
      } catch (error) {
         console.error('Error cropping image:', error);
         showToast({ type: 'failed', content: 'Failed to crop image' });
      }
   }, [completedCrop, originalFile, getCroppedImg, rotation, onChange, showToast]);

   // Handle crop cancel
   const handleCropCancel = useCallback(() => {
      setShowCropModal(false);
      setOriginalImage(null);
      setOriginalFile(null);
      setCrop(undefined);
      setCompletedCrop(undefined);
      setRotation(0);
   }, []);

   // Handle recrop
   const handleRecrop = useCallback(() => {
      if (originalImage) {
         setRotation(0); // Reset rotation when recropping
         setShowCropModal(true);
      }
   }, [originalImage]);

   return (
      <>
         <div className={cx('flex flex-col items-center justify-center gap-y-[8px]', className)}>
            {/* Image Preview */}
            <div className='relative w-4/5 max-w-[210px] h-[210px] border-2 border-dashed border-gray-300 rounded-[16px] overflow-hidden bg-gray-50 flex items-center justify-center'>
               {croppedImage ? (
                  <img 
                     className='max-w-full max-h-full object-contain rounded-[16px]'
                     src={croppedImage} 
                     alt='preview'
                     style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                     }}
                  />
               ) : (
                  <div className='flex items-center justify-center text-gray-400'>
                     <span>No image selected</span>
                  </div>
               )}
            </div>

            <div className='text-[12px] text-[#979797] text-center'>
               Max 1MB, JPEG/JPG/PNG/WEBP<br />
               {cropAspectRatio === 1 ? 'Square crop' : `${cropAspectRatio}:1 aspect ratio`} • Output: {outputSize.width}×{outputSize.height}px
            </div>

            {/* Action Buttons */}
            <div className='flex gap-2'>
               <label htmlFor='imageInput' className='cursor-pointer text-[#FFFFFF] bg-[#333333] rounded-[8px] px-[16px] py-[8px]'>
                  {croppedImage ? 'Change Image' : 'Upload Image'}
               </label>
               
               {croppedImage && originalImage && (
                  <button 
                     type="button"
                     onClick={handleRecrop}
                     className='cursor-pointer text-[#333333] bg-gray-200 rounded-[8px] px-[16px] py-[8px] hover:bg-gray-300'
                  >
                     Recrop
                  </button>
               )}
            </div>

            <input 
               accept="image/png, image/jpeg, image/webp, image/jpg" 
               id="imageInput" 
               name={name} 
               className='hidden' 
               type='file' 
               onChange={handleImageChange} 
               onBlur={onBlur} 
               ref={domRef} 
            />
         </div>

         {/* Crop Modal */}
         {showCropModal && originalImage && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
               <div className='bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-auto'>
                  <h3 className='text-lg font-semibold mb-4'>Crop Your Image</h3>
                  
                  {/* Rotation Controls */}
                  <div className='flex items-center justify-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg'>
                     <span className='text-sm font-medium text-gray-700'>Rotate:</span>
                     <button
                        type="button"
                        onClick={() => rotateImage(-90)}
                        className='flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100'
                        title="Rotate 90° counter-clockwise"
                     >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M1 4v6h6"/>
                           <path d="m1 10 3.5-3.5a8 8 0 1 1 0 11.3"/>
                        </svg>
                        90° ↺
                     </button>
                     <button
                        type="button"
                        onClick={() => rotateImage(90)}
                        className='flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100'
                        title="Rotate 90° clockwise"
                     >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M23 4v6h-6"/>
                           <path d="m23 10-3.5-3.5a8 8 0 1 0 0 11.3"/>
                        </svg>
                        90° ↻
                     </button>
                     <button
                        type="button"
                        onClick={() => rotateImage(180)}
                        className='flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100'
                        title="Rotate 180°"
                     >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
                           <path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
                           <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
                           <path d="M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                        180°
                     </button>
                     <div className='text-xs text-gray-500 ml-2'>
                        Current: {rotation}°
                     </div>
                  </div>
                  
                  <div className='mb-4'>
                     <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={cropAspectRatio}
                        minWidth={50}
                        minHeight={cropAspectRatio === 1 ? 50 : 50 / cropAspectRatio}
                     >
                        <img
                           ref={imgRef}
                           alt="Crop me"
                           src={originalImage}
                           style={{ 
                              maxHeight: '60vh', 
                              maxWidth: '100%',
                              transform: `rotate(${rotation}deg)`,
                              transition: 'transform 0.3s ease'
                           }}
                           onLoad={onImageLoad}
                        />
                     </ReactCrop>
                  </div>

                  <div className='flex justify-between items-center'>
                     <div className='text-sm text-gray-600'>
                        Tip: Rotate first, then adjust your crop area
                     </div>
                     <div className='flex gap-3'>
                        <button
                           type="button"
                           onClick={handleCropCancel}
                           className='px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300'
                        >
                           Cancel
                        </button>
                        <button
                           type="button"
                           onClick={handleCropConfirm}
                           className='px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700'
                           disabled={!completedCrop}
                        >
                           Apply Crop & Rotation
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
});

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload;
