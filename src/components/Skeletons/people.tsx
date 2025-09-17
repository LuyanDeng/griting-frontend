import React from 'react';

export const TeamItemSkeleton: React.FC = () => {
    return (
        <div className="flex flex-row items-start gap-x-[8px] animate-pulse">
            {/* Image placeholder */}
            <div className="shrink-0 w-[134px] h-[122px] rounded-[16px] bg-gray-200" />

            <div className="flex flex-col gap-y-[8px] flex-grow">
                {/* Name placeholder */}
                <div className="h-[31px] bg-gray-200 rounded w-3/4" />

                {/* Title placeholder */}
                <div className="space-y-2">
                    <div className="h-[24px] bg-gray-200 rounded w-full" />
                    <div className="h-[24px] bg-gray-200 rounded w-2/3" />
                </div>

                {/* Read Bio placeholder */}
                <div className="flex flex-row items-center gap-x-[8px] mt-2">
                    <div className="h-[24px] bg-gray-200 rounded w-[80px]" />
                    <div className="w-[24px] h-[24px] bg-gray-200 rounded-full" />
                </div>
            </div>
        </div>
    );
};



export const TeamSectionSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col items-center py-[32px]">
            <div className="flex flex-col items-center w-4/5 sm:w-[65.23%] gap-y-[8px] z-10 mb-8">
                <div className="w-1/2 h-[32px] bg-gray-200 rounded mb-[16px]" />
                <div className="w-full h-[24px] bg-gray-200 rounded" />
                <div className="w-2/3 h-[24px] bg-gray-200 rounded" />
            </div>
            <div className="w-11/12 xl:w-[79.36%]">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
                    {[...Array(6)].map((_, index) => (
                        <TeamItemSkeleton key={index} />
                    ))}
                </div>
            </div>
            <div className="mt-[16px] w-[245px] h-[40px] bg-gray-200 rounded" />
        </div>
    );
};

export const MemberItemSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col gap-x-[8px] w-full max-w-[300px]">
           
            <div className="w-[252px] h-[220px] bg-[rgba(0,0,0,0.06)] rounded-[16px] shrink-0">

            </div>

            <div className="grid grid-cols-1 gap-1 md:gap-2 mt-2">
                <div className="h-[24px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
                <div className="h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
                <div className="h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
                <div className="flex flex-row items-center gap-x-[8px] mt-1">
                    <div className="h-[24px] w-[80px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
                    <div className="h-[24px] w-[24px] bg-[rgba(0,0,0,0.06)] rounded-full" />
                </div>
            </div>
        </div>
    )
}

export const MemberSectionSkeleton: React.FC = () => {
    return (
      <div className="flex flex-col items-center animate-pulse">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center w-4/5 sm:w-[65.23%] gap-y-[8px] z-10 mb-8">
          <div className="h-8 bg-gray-200 rounded w-3/4 max-w-[300px]"></div>
          <div className="h-4 bg-gray-200 rounded w-full max-w-[500px] mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 max-w-[400px] mt-1"></div>
        </div>
  
        {/* Members Grid */}
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[12px] lg:gap-[24px] xl:gap-[36px]">
            {[...Array(4)].map((_, index) => (
              <MemberItemSkeleton key={index} />
            ))}
          </div>
        </div>
  
        {/* "View All" Button Placeholder */}
        <div className="mt-[16px] h-10 bg-gray-200 rounded w-40"></div>
      </div>
    )
  }