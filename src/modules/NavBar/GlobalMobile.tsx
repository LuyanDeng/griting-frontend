import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import CotonCandy from '../GradientBgs'
// import { useTranslation } from 'react-i18next' // or your i18n hook
// import CotonCandy from './CotonCandy'

interface GlobalNavItemProps {
  title: string
  curPath: string
  to: string
  color: 'white' | 'black' | 'transparent'
}

const GlobalMobileItem: React.FC<GlobalNavItemProps> = ({
  title,
  curPath,
  to,
  color,
}) => {
  // const { t } = useTranslation('globalNavBar')
  return (
    <Link
      href={to}
      className="flex flex-row justify-center items-center cursor-pointer"
    >
      <span
        className={cx(
          'font-bold text-[17px] leading-[1.65] duration-300',
          {
            'text-[#fff]': color === 'black',
            'text-[#000]': color === 'white' || color === 'transparent',
          },
          curPath === to && 'underline',
          curPath?.startsWith(to) && to !== '/' && 'underline'
        )}
      >
        {title /* replace with t(title) if using i18n */}
      </span>
    </Link>
  )
}

const GlobalMobile: React.FC<{
  isMobile: boolean
  color: 'white' | 'black' | 'transparent'
}> = ({ isMobile, color }) => {
  const pathName = usePathname()
  // const { t } = useTranslation('globalNavBar')

  return (
    <div
      className={cx(
        'py-[50px] sm:display-none absolute flex flex-col items-center gap-y-[60px] w-full h-[calc(100vh-70px)] left-0 top-[70px] transition-transform duration-300 z-50 overflow-hidden',
        {
          'bg-[#0E0E10]': color === 'black',
          'bg-[#ffffff]': color === 'white',
          // 'bg-transparent': color === 'transparent',
        },
        isMobile ? 'translate-y-0' : 'translate-y-[-200vh]'
      )}
    >
      {color === 'transparent' && (
        <CotonCandy style={{ top: -150, height: 'calc(200vh)' }} />
      )}
      <GlobalMobileItem
        title="home"
        curPath={pathName}
        to="/"
        color={color}
      />
      <GlobalMobileItem
        title="annualConference"
        curPath={pathName}
        to="/annualconf"
        color={color}
      />
      <GlobalMobileItem
        title="events"
        curPath={pathName}
        to="/events"
        color={color}
      />
      <GlobalMobileItem
        title="foundersClub"
        curPath={pathName}
        to="/founders"
        color={color}
      />
      <GlobalMobileItem
        title="people"
        curPath={pathName}
        to="/people"
        color={color}
      />
    </div>
  )
}

export default GlobalMobile
