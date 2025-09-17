'use client'
import { useState, useEffect, useCallback, use } from 'react'
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'clsx'
import HystaTxt from '@/assets/imgs/logo_alt.png'
import HystaTxtB from '@/assets/imgs/defaultSpeaker.png'
import HystaLogo from '@/assets/icons/logo_alt.png'
import { isCurPath } from '@/utils/nav'
import GlobalMobile from './GlobalMobile'
import AuthLogin from './AuthLogin'
import ProfileEntry from './ProfileEntry'

export type ThemeColor = 'white' | 'black' | 'transparent'

export interface GlobalNavItemProps {
  title: string
  curPath: string
  to: string
  color: ThemeColor
}

const GlobalNavItem: React.FC<GlobalNavItemProps> = ({
  title,
  curPath,
  to,
  color,
}) => {
  return (
    <Link
      href={to}
      className="flex flex-col justify-between items-center h-[34px] cursor-pointer"
    >
      <span
        className={cx(
          'font-semibold text-[16px] leading-[22px] tracking-[0.03em] whitespace-nowrap',
          {
            'text-[#fff]': color === 'black',
            'text-[#000]': color === 'white' || color === 'transparent',
          }
        )}
      >
        {title}
      </span>
      {isCurPath(curPath, to) && (
        <div
          className={cx('w-full h-[4px] rounded-t-[4px]', {
            'bg-[#fff]': color === 'black',
            'bg-[#000]': color === 'white' || color === 'transparent',
          })}
        />
      )}
    </Link>
  )
}

export interface GlobalNavbarProps {
  color: ThemeColor
  transitionSec?: string
  transitionColor?: ThemeColor
}

const GlobalNavbar: React.FC<GlobalNavbarProps> = ({
  color,
  transitionSec,
  transitionColor,
}) => {
  const pathName = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [curColor, setCurColor] = useState<ThemeColor>(color)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const transitionSection = document.getElementById(transitionSec as string)
    if (!transitionSection) return
    const transitionD = transitionSection.getBoundingClientRect()
    if (transitionD.top > 100) {
      setCurColor(color)
      setScrolled(window.scrollY > 50)
      return
    }
    if (transitionD.top <= 100) {
      setCurColor(transitionColor as ThemeColor)
      return
    }
  }, [transitionSec, transitionColor, color])

  useEffect(() => {
    setIsMobile(false)
  }, [pathName])

  useEffect(() => {
    if (!(transitionSec && transitionColor)) return
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, pathName, transitionSec, transitionColor])

  useEffect(() => {
    setCurColor(color)
  }, [pathName, color])

  const isAnnualConfRoute = pathName.includes('/annualconf')

  return (
    <nav
      className={cx(
        "fixed flex items-center justify-center w-full h-[70px] font-['Montserrat',sans-serif] duration-200 delay-0 z-[100]",
        {
          'bg-[#0E0E10]': curColor === 'black',
          'bg-[#ffffff]': curColor === 'white',
          'bg-transparent': curColor === 'transparent' && !scrolled,

          '!bg-[#FFFFFF99] opacity-100':
            scrolled && curColor === 'transparent' && !isMobile,
          'bg-gradient-to-r from-[#b1b4f8] via-30% via-[#FAE6FF] vto-100% to-[#75D2FB] animate-gradient-fast':
            scrolled && curColor === 'transparent' && isMobile,
        }
      )}
    >
      <GlobalMobile isMobile={isMobile} color={curColor} />
      <div className="flex flex-row justify-between items-center w-11/12 xl:w-[79%] h-full max-w-[1920px] z-[100]">
        {/* <Link
          href="/"
          className="flex flex-row items-center gap-x-[10px] w-[200px] cursor-pointer"
        >
          <Image src={HystaLogo} width={49} height={49} alt="Hysta" />
          <Image
            src={color === 'black' ? HystaTxt : HystaTxtB}
            className="w-[54px] h-[40px]"
            width={172}
            height={118}
            alt="Hysta Text"
          />
        </Link> */}
        <div className="hidden lg:flex flex-row justify-center items-center grow">
          <div className="flex flex-row justify-center gap-x-[42px]">
            <GlobalNavItem
              title="home"
              curPath={pathName}
              to="/"
              color={color}
            />
            {/* <GlobalNavItem
              title="annualConference"
              curPath={pathName}
              to="/annualconf"
              color={color}
            />
            <GlobalNavItem
              title="events"
              curPath={pathName}
              to="/events"
              color={color}
            />
            <GlobalNavItem
              title="foundersClub"
              curPath={pathName}
              to="/founders"
              color={color}
            /> */}
            <GlobalNavItem
              title="people"
              curPath={pathName}
              to="/people"
              color={color}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-[8px]">
          <AuthLogin color={curColor}>
            <ProfileEntry />
          </AuthLogin>
          <label
            htmlFor="burger-check"
            className="lg:hidden flex flex-col w-[35px] h-[26px] cursor-pointer"
          >
            <input
              id="burger-check"
              type="checkbox"
              className="hidden"
              checked={isMobile}
              onChange={() => setIsMobile(!isMobile)}
            />
            <div
              className={cx('w-[35px] h-[4px] rounded-[3px]', {
                'bg-[#000]': color === 'white' || color === 'transparent',
                'bg-[#fff]': color === 'black',
              })}
            />
            <div
              className={cx('my-[5px] w-[30px] h-[4px] rounded-[3px]', {
                'bg-[#000]': color === 'white' || color === 'transparent',
                'bg-[#fff]': color === 'black',
              })}
            />
            <div
              className={cx('w-[25px] h-[4px] rounded-[3px]', {
                'bg-[#000]': color === 'white' || color === 'transparent',
                'bg-[#fff]': color === 'black',
              })}
            />
          </label>
        </div>
      </div>
    </nav>
  )
}

export default GlobalNavbar