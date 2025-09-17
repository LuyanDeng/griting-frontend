"use client"
import { ComponentProps } from 'react'
import { useAtomValue } from 'jotai'
import cx from 'clsx'
import { NotificationIcon } from '@/components/Icons'
import { messageUnreadTotalAtom } from '@/services/profile'


const NotificationBadge: React.FC<ComponentProps<'svg'>> = ({ className }) => {
   const unreadTotalResult = useAtomValue(messageUnreadTotalAtom)
   const unreadTotal = unreadTotalResult.data ?? 0;
   
   return <div className='relative'>
      <NotificationIcon className={cx('w-[24px] h-[24px] stroke-[0.5px]', className)} iconClassName='!fill-[#fff] stroke-[#000]' />{!!unreadTotal && <div className='absolute right-[-6px] top-[-6px] flex items-center justify-center w-[16px] h-[16px] text-[12px] text-[#fff] font-medium bg-[#d92f26] rounded-[8px]'>{unreadTotal}</div>}
   </div>
}

export default NotificationBadge