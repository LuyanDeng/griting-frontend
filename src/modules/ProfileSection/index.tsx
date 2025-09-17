import { PropsWithChildren, ComponentProps } from 'react';
import cx from 'clsx'

export interface ProfileSectionProps extends ComponentProps<'div'> {
   title?: string;
   required?:boolean;
}

export default function ProfileSection({
   title,
   required,
   children,
   className,
   ...props
}: PropsWithChildren<ProfileSectionProps>) {
   return (
      <div className={cx("p-[16px] md:p-[32px] flex flex-col gap-y-[16px] bg-[#FFFFFF] border-[1px] border-[#DCDEE0] border-dashed rounded-[16px]", className)} {...props}>
         {title && (
            <div className="flex items-center gap-2">
               <p className="text-[24px] font-medium">{title}</p>
               {required && (
                  <span className="text-sm text-red-500 font-normal">
                     (required)
                  </span>
               )}
            </div>
         )}
         {children}
      </div>
   );
}