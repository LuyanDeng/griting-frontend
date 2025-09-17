'use client'
import { usePathname } from 'next/navigation'
import { GlobalNavbarProps } from '@/modules/NavBar/GlobalNav'

const NavStyle: {
  colorful: GlobalNavbarProps
  black: GlobalNavbarProps
  white: GlobalNavbarProps
} = {
  colorful: {
    color: 'transparent',
    transitionSec: 'info',
    transitionColor: 'white',
  },
  black: {
    color: 'black',
  },
  white: {
    color: 'white',
  },
}

const useNavStyle: () => GlobalNavbarProps | undefined = () => {
  const pathName = usePathname()

  if (pathName.includes('/annualconf')) return NavStyle['black']
  if (pathName.includes('/events')||pathName.includes('/profile')) return NavStyle['white']
  // if (pathName.includes('/people')) {
  //   // if ( pathName.startsWith('/speakers')) {
  //   return NavStyle['black']
  // }
  return NavStyle['colorful']
}

export default useNavStyle
