import React from 'react'
import Mentors from './mentors'

const MentorSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1512px] px-4 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 gap-4 sm:gap-6 md:gap-8 mx-auto">
      <h1 className="text-[#2E2E2E] text-center font-montserrat text-[38px] md:text-[44px] font-black leading-[120%] tracking-[1.32px]">
        Mentors
      </h1>

      <Mentors />
    </div>
  )
}
export default MentorSection
