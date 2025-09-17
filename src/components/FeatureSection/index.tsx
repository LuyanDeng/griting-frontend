import Image from 'next/image';
import Link from 'next/link';

// Define the props the component will accept
interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean; // This will control the layout order
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  lang: string;
}

const FeatureSection = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
  showButton = false,
  buttonText = 'Learn More',
  buttonLink = '#',
  lang,
  
}: FeatureSectionProps) => {
  return (
    // The main container for one section
    <div className="max-w-[1280x] mx-auto px-6 lg:px-8 mt-24 mb-6">
      <div
        className={`
          flex flex-col lg:flex-row items-center gap-4 lg:gap-2
          ${reverse ? 'lg:flex-row-reverse' : ''} 
          ${reverse ? 'lg:gap-x-20' : 'lg:gap-x-12'}
          lg:gap-y-0
        `}
      >
        {/* Text Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left md:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            {description}
          </p>
          {showButton && (
            <Link 
            href={`/${lang}/${buttonLink}`} 
              className="mt-8 inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              {buttonText}
            </Link>
          )}
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2">
          {/* Use a container to create the large rounded corners */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-[400px] object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
