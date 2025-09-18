'use client'
import { useState, useCallback } from 'react'
import { useAtomValue } from 'jotai'
import cx from 'clsx'
import CusBtn from '@/components/Button'
import { MentorsAtom } from '@/services/mentor'
import MentorItem, { MentorItemSkeleton } from './mentoritem'

const Mentors: React.FC = () => {
  const [showMore, setShowMore] = useState(false)
  const { data, isPending, isError } = useAtomValue(MentorsAtom)

  const toggleShowMore = useCallback(() => {
    setShowMore((prev) => !prev)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-[32px] font-semibold text-[24px] leading-[31.2px] tracking-[0.03em] text-[#2E2E2E]"></div>
      <div className="w-full ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[12px] lg:gap-[24px] xl:gap-[36px]">
          {isPending &&
            [1, 2, 3, 4].map((_, index) => (
              <MentorItemSkeleton key={`mentor-${index}`} />
            ))}
          {data &&
            data
              .slice(0, 4)
              .map((mentor: any) => (
                <MentorItem key={mentor._uid} {...mentor} />
              ))}
        </div>
        {data && (
          <div
            className={cx(
              'grid justify-items-center duration-200 ease-in-out overflow-hidden',
              showMore ? 'grid-rows-[1fr] mb-[16px]' : 'grid-rows-[0fr]'
            )}
          >
            <div className="pt-[16px] grid grid-cols-2 md:grid-cols-4 gap-[24px] w-full min-h-[0px]">
              {data.slice(4).map((mentor: any) => (
                <MentorItem key={mentor._uid} {...mentor} />
              ))}
            </div>
          </div>
        )}
      </div>
      <CusBtn
        className="mt-[16px]"
        variant="outlined"
        color="black"
        onClick={toggleShowMore}
      >
        {!showMore
          ? `Show more (${data?.length ?? 0})`
          : 'Show less'}
      </CusBtn>
    </div>
  )
}

export default Mentors