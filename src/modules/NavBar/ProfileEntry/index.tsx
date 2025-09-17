"use client"
import { useTransition, useCallback, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cx from 'clsx'
import { useAtom } from 'jotai'
import Dropdown from '@/components/Dropdown'
import { LogOutIcon, HomeIcon, CalendarIcon, AdminIcon } from '@/components/Icons'
import NotificationBadge from '@/modules/NotificationBadge'
// import { requestNotificationPermission } from '@/utils/notification'
import { profileAtom, useSignOut} from '@/services/profile'
import { ProfileData } from '@/types/Profile'
import useOutsideClick from '@/hooks/outsideClick'

const ProfileEntry: React.FC = () => {
   const [{ data: profile }] = useAtom(profileAtom)!
   const [dropdownKey, setDropdownKey] = useState(0);

   useEffect(() => {
      // requestNotificationPermission()
   }, [])

   const handleItemClick = () => {
      // Force dropdown to close by re-rendering it
      setDropdownKey(prev => prev + 1);
   };

   return (
      <Dropdown
         key={dropdownKey}
         Content={<ProfileDropdown onItemClick={handleItemClick} {...(profile as ProfileData)} />}
         offsetOptions={{ mainAxis: 8 }}
         trigger='click'
         options={{
            placement: 'bottom-end',
         }}
      >
         <Image
            src={(!!profile?.profileImage && profile?.profileImage?.length > 0) ? profile.profileImage : '/imgs/default.png'}
            className='w-[40px] h-[40px] rounded-[20px] object-cover cursor-pointer'
            alt='profile' 
            width={40} 
            height={40} 
            draggable={false}
         />
      </Dropdown>
   )
}

export default ProfileEntry

// Update the interface to include onItemClick
interface ProfileDropdownProps extends ProfileData {
   onItemClick: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ firstName, lastName, role, onItemClick }) => {
   console.log(role);
   const [isPending, startTransition] = useTransition();
   const signOut = useSignOut()

   const handleSignOut = useCallback(() => {
      onItemClick(); 
      startTransition(async () => {
         if (isPending) return
         await signOut()
      })
   }, [onItemClick, isPending, signOut])

   const handleLinkClick = useCallback(() => {
      onItemClick();
   }, [onItemClick]);

   return (
      <div className='grid grid-rows-[auto] items-center w-[200px] bg-[#ffffff] border-[1px] border border-[#0000001F] rounded-[16px]'>
         <div className='p-[16px] w-full font-medium text-[14px] text-[#757575] truncate border-b border-b border-b-[#0000001F]'>
            {firstName} {lastName}
         </div>
         
         <Link 
            className='p-[16px] flex flex-row items-center gap-x-[8px] hover:bg-gray-50' 
            href='/profile'
            onClick={handleLinkClick}
         >
            <HomeIcon className='w-[24px] h-[24px]' iconClassName='!fill-[#fff] stroke-[#000]' />
            <span>Profile</span>
         </Link>
         
         {role === "admin" && (
            <Link 
               className='p-[16px] flex flex-row items-center gap-x-[8px] hover:bg-gray-50' 
               href='/adminconsole'
               onClick={handleLinkClick}
            >
               <AdminIcon className='w-[24px] h-[24px]' iconClassName='!fill-[#fff] stroke-[#000]' />
               <span>Admin Console</span>
            </Link>
         )}
         
         <Link 
            className='p-[16px] flex flex-row items-center gap-x-[8px] hover:bg-gray-50' 
            href='/profile/events'
            onClick={handleLinkClick}
         >
            <CalendarIcon className='w-[24px] h-[24px]' iconClassName='!fill-[#fff] stroke-[#000]' />
            <span>Events</span>
         </Link>
         
         {/* <Link 
            className='p-[16px] flex flex-row items-center gap-x-[8px] hover:bg-gray-50' 
            href='/profile/messages'
            onClick={handleLinkClick}
         >
            <NotificationBadge />
            <span>Messages</span>
         </Link> */}
         
         <div 
            onClick={handleSignOut} 
            className={cx(
               'p-[16px] flex flex-row items-center gap-x-[8px] hover:bg-gray-50', 
               isPending ? 'cursor-not-allowed pointer-events-none opacity-50' : 'cursor-pointer'
            )}
         >
            <LogOutIcon className='w-[24px] h-[24px]' />
            <span>Sign out</span>
         </div>
      </div>
   )
}