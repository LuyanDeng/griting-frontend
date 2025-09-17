import { ComponentProps } from 'react'
import cx from 'clsx'
import Image from 'next/image'
import TwitterI from '@/assets/icons/twitter.png'

interface IconProps extends ComponentProps<'svg'> {
  iconClassName?: string
  className?: string
}

export const RArrow: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M2 7.99999H15.435M15.435 7.99999L9.75098 2.31593M15.435 7.99999L10.2677 13.1673"
      strokeWidth="3"
      strokeLinecap="round"
      className={cx('stroke-[#1E1E1E]', iconClassName)}
    />
  </svg>
)

export const ArrowHead: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="m2.931 10.843l4.685-4.611a.546.546 0 0 1 .768 0l4.685 4.61a.55.55 0 0 0 .771 0a.53.53 0 0 0 0-.759l-4.684-4.61a1.65 1.65 0 0 0-2.312 0l-4.684 4.61a.53.53 0 0 0 0 .76a.55.55 0 0 0 .771 0"
      className={iconClassName}
    />
  </svg>
)

export const Checked: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 7L10 17l-5-5"
      className={iconClassName}
    />
  </svg>
)
export const LArrow: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M2 7.99999H15.435M15.435 7.99999L9.75098 2.31593M15.435 7.99999L10.2677 13.1673"
      strokeWidth="3"
      strokeLinecap="round"
      className={cx('stroke-[#1E1E1E]', iconClassName)}
    />
  </svg>
)
export const YouTube: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="21"
    height="15"
    viewBox="0 0 21 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M20.373 3.01367C20.8184 4.57227 20.8184 7.91211 20.8184 7.91211C20.8184 7.91211 20.8184 11.2148 20.373 12.8105C20.1504 13.7012 19.4453 14.3691 18.5918 14.5918C16.9961 15 10.6875 15 10.6875 15C10.6875 15 4.3418 15 2.74609 14.5918C1.89258 14.3691 1.1875 13.7012 0.964844 12.8105C0.519531 11.2148 0.519531 7.91211 0.519531 7.91211C0.519531 7.91211 0.519531 4.57227 0.964844 3.01367C1.1875 2.12305 1.89258 1.41797 2.74609 1.19531C4.3418 0.75 10.6875 0.75 10.6875 0.75C10.6875 0.75 16.9961 0.75 18.5918 1.19531C19.4453 1.41797 20.1504 2.12305 20.373 3.01367ZM8.60938 10.918L13.8789 7.91211L8.60938 4.90625V10.918Z"
      className={cx('fill-black', iconClassName)}
    />
  </svg>
)

export const LinkedIn: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M15.4375 0.5625C16.0684 0.5625 16.625 1.11914 16.625 1.78711V16C16.625 16.668 16.0684 17.1875 15.4375 17.1875H1.15039C0.519531 17.1875 0 16.668 0 16V1.78711C0 1.11914 0.519531 0.5625 1.15039 0.5625H15.4375ZM5.00977 14.8125V6.9082H2.56055V14.8125H5.00977ZM3.78516 5.79492C4.56445 5.79492 5.19531 5.16406 5.19531 4.38477C5.19531 3.60547 4.56445 2.9375 3.78516 2.9375C2.96875 2.9375 2.33789 3.60547 2.33789 4.38477C2.33789 5.16406 2.96875 5.79492 3.78516 5.79492ZM14.25 14.8125V10.4707C14.25 8.35547 13.7676 6.68555 11.2812 6.68555C10.0938 6.68555 9.27734 7.35352 8.94336 7.98438H8.90625V6.9082H6.56836V14.8125H9.01758V10.916C9.01758 9.87695 9.20312 8.875 10.502 8.875C11.7637 8.875 11.7637 10.0625 11.7637 10.9531V14.8125H14.25Z"
      className={cx('fill-black', iconClassName)}
    />
  </svg>
)

export const Meta: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M18.7031 9.875C18.7031 14.4766 15.3262 18.2988 10.9102 18.9668V12.5469H13.0625L13.4707 9.875H10.9102V8.16797C10.9102 7.42578 11.2812 6.7207 12.4316 6.7207H13.582V4.45703C13.582 4.45703 12.543 4.27148 11.5039 4.27148C9.42578 4.27148 8.05273 5.57031 8.05273 7.87109V9.875H5.71484V12.5469H8.05273V18.9668C3.63672 18.2988 0.296875 14.4766 0.296875 9.875C0.296875 4.79102 4.41602 0.671875 9.5 0.671875C14.584 0.671875 18.7031 4.79102 18.7031 9.875Z"
      className={cx('fill-black', iconClassName)}
    />
  </svg>
)

export const WeChat: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="21"
    height="18"
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M14.2871 5.60938C10.8359 5.60938 8.12695 8.16992 8.12695 11.3242C8.12695 11.8438 8.23828 12.3633 8.38672 12.8457C8.12695 12.8457 7.94141 12.8828 7.68164 12.8828C6.79102 12.8828 6.08594 12.6973 5.1582 12.5117L2.63477 13.7734L3.33984 11.584C1.55859 10.3223 0.482422 8.68945 0.482422 6.72266C0.482422 3.27148 3.71094 0.5625 7.68164 0.5625C11.2441 0.5625 14.3613 2.75195 14.9922 5.64648C14.7324 5.60938 14.5098 5.60938 14.2871 5.60938ZM10.3906 3.64258C9.87109 3.64258 9.31445 4.01367 9.31445 4.57031C9.31445 5.08984 9.83398 5.46094 10.3906 5.46094C10.9473 5.46094 11.2812 5.08984 11.2812 4.57031C11.2812 4.01367 10.9473 3.64258 10.3906 3.64258ZM5.34375 5.46094C5.90039 5.46094 6.23438 5.08984 6.23438 4.57031C6.23438 4.01367 5.90039 3.64258 5.34375 3.64258C4.78711 3.64258 4.26758 4.01367 4.26758 4.57031C4.26758 5.08984 4.78711 5.46094 5.34375 5.46094ZM20.8926 11.25C20.8926 12.8828 19.8164 14.3301 18.332 15.4062L18.8887 17.2246L16.9219 16.1113C16.1797 16.2969 15.4375 16.4824 14.7324 16.4824C11.3184 16.4824 8.60938 14.1445 8.60938 11.25C8.60938 8.35547 11.2812 6.01758 14.7324 6.01758C17.998 6.01758 20.8926 8.35547 20.8926 11.25ZM12.7285 10.3223C13.2852 10.3223 13.6562 9.98828 13.6562 9.61719C13.6562 9.24609 13.2852 8.875 12.7285 8.875C12.3945 8.875 12.0234 9.24609 12.0234 9.61719C12.0234 9.98828 12.3945 10.3223 12.7285 10.3223ZM16.7363 10.3223C17.2559 10.3223 17.627 9.98828 17.627 9.61719C17.627 9.24609 17.2559 8.875 16.7363 8.875C16.3652 8.875 15.9941 9.24609 15.9941 9.61719C15.9941 9.98828 16.3652 10.3223 16.7363 10.3223Z"
      className={cx('fill-black', iconClassName)}
    />
  </svg>
)

export const Twitter: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <div className={cx('flex justify-center items-center', className)}>
    <Image
      src={TwitterI}
      alt=""
      width={36}
      height={36}
      className={cx('w-[35px] h-[35px]', iconClassName)}
    />
  </div>
)

//TODO:move place
export const ContactsIcons = [
  {
    name: 'linkedIn',
    Icon: LinkedIn,
    link: 'https://www.linkedin.com/company/hysta-hua-yuan-science-and-technology-association-/',
  },
  {
    name: 'youtube',
    Icon: YouTube,
    link: 'https://www.youtube.com/channel/UC2KrBL5JAthjg7Yx5PGvE4Q',
  },
  {
    name: 'meta',
    Icon: Meta,
    link: 'https://www.facebook.com/HystaPage/',
  },
  {
    name: 'wechat',
    Icon: WeChat,
    link: 'https://weixin.qq.com/r/nkyIkMTEa5kUrYDz9xmM',
    qr: '/hystaQR.jpg',
  },
  {
    name: 'twitter',
    Icon: Twitter,
    link: 'https://x.com/hysta',
  },
]

export const FailedIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="56"
    height="57"
    viewBox="0 0 56 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g filter="url(#filter0_d_436_4126)">
      <rect
        x="4"
        y="1"
        width="48"
        height="49"
        rx="24"
        fill="white"
        shapeRendering="crispEdges"
      />
      <rect
        x="7.5"
        y="4.5"
        width="41"
        height="42"
        rx="20.5"
        stroke="#FF3B30"
        strokeWidth="7"
        shapeRendering="crispEdges"
      />
      <path
        d="M28 29.0469C28.584 29.0469 29.0781 29.541 29.0332 30.125C29.0332 30.7539 28.584 31.2031 28 31.2031C27.416 31.2031 26.9219 30.7539 26.9219 30.125C26.9219 29.541 27.3711 29.0469 28 29.0469ZM28 27.25C27.5957 27.25 27.2812 26.9355 27.2812 26.5312V20.0625C27.2812 19.7031 27.6406 19.3438 28 19.3438C28.3145 19.3438 28.6738 19.7031 28.6738 20.0625V26.5312C28.6738 26.9355 28.3594 27.25 28 27.25ZM39.1406 30.7539C39.5898 31.5176 39.5898 32.416 39.1406 33.1797C38.6914 33.9883 37.8828 34.4375 36.9844 34.4375H19.0156C18.0723 34.4375 17.2637 33.9883 16.8145 33.1797C16.3652 32.416 16.3652 31.5176 16.8145 30.7539L25.7988 15.5703C26.248 14.8066 27.0566 14.3125 28 14.3125C28.8984 14.3574 29.707 14.8066 30.1562 15.5703L39.1406 30.7539ZM37.8828 32.4609C38.1074 32.1465 38.0625 31.7871 37.8828 31.4727L28.8984 16.2891C28.7188 15.9746 28.3594 15.7949 28 15.75C27.9551 15.75 28 15.75 28 15.75C27.5957 15.75 27.2363 15.9746 27.0566 16.2891L18.0723 31.4727C17.8926 31.7871 17.8477 32.1465 18.0723 32.4609C18.252 32.8203 18.6113 33 19.0156 33H36.9395C37.3438 33 37.7031 32.8203 37.8828 32.4609Z"
        fill="#FF3B30"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_436_4126"
        x="0"
        y="0"
        width="56"
        height="57"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.231373 0 0 0 0 0.188235 0 0 0 0.4 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_436_4126"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_436_4126"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export const LocationIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="18"
    height="25"
    viewBox="0 0 18 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M15.75 9C15.75 5.29688 12.7031 2.25 9 2.25C5.25 2.25 2.25 5.29688 2.25 9C2.25 9.60938 2.4375 10.5 2.95312 11.7188C3.42188 12.8438 4.125 14.1562 4.92188 15.4688C6.28125 17.625 7.82812 19.6875 9 21.1875C10.125 19.6875 11.6719 17.625 13.0312 15.4688C13.8281 14.1562 14.5312 12.8438 15 11.7188C15.5156 10.5 15.75 9.60938 15.75 9ZM18 9C18 13.125 12.5156 20.3906 10.0781 23.4375C9.51562 24.1406 8.4375 24.1406 7.875 23.4375C5.48438 20.3906 0 13.125 0 9C0 4.03125 4.03125 0 9 0C13.9688 0 18 4.03125 18 9ZM10.5 9C10.5 8.20312 9.79688 7.5 9 7.5C8.15625 7.5 7.5 8.20312 7.5 9C7.5 9.84375 8.15625 10.5 9 10.5C9.79688 10.5 10.5 9.84375 10.5 9ZM5.25 9C5.25 7.6875 5.95312 6.46875 7.125 5.76562C8.25 5.10938 9.70312 5.10938 10.875 5.76562C12 6.46875 12.75 7.6875 12.75 9C12.75 10.3594 12 11.5781 10.875 12.2812C9.70312 12.9375 8.25 12.9375 7.125 12.2812C5.95312 11.5781 5.25 10.3594 5.25 9Z"
      fillOpacity="0.9"
      className={cx('fill-white', iconClassName)}
    />
  </svg>
)

export const CalendarIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="21"
    height="24"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M7.125 1.125V3H13.875V1.125C13.875 0.515625 14.3438 0 15 0C15.6094 0 16.125 0.515625 16.125 1.125V3H18C19.6406 3 21 4.35938 21 6V6.75V9V21C21 22.6875 19.6406 24 18 24H3C1.3125 24 0 22.6875 0 21V9V6.75V6C0 4.35938 1.3125 3 3 3H4.875V1.125C4.875 0.515625 5.34375 0 6 0C6.60938 0 7.125 0.515625 7.125 1.125ZM2.25 9V21C2.25 21.4219 2.57812 21.75 3 21.75H18C18.375 21.75 18.75 21.4219 18.75 21V9H2.25Z"
      fillOpacity="0.9"
      className={cx('fill-black', iconClassName)}
    />
  </svg>
)

export const VideoIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      className={cx('stroke-[#1E1E1E]', iconClassName)}
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.211 11.106L9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788"
      />
      <circle cx="12" cy="12" r="9" />
    </g>
  </svg>
)

export const LanIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M9.01758 16.3125C9.26367 16.3125 9.9668 16.0664 10.6699 14.625C10.9863 13.9922 11.2676 13.2539 11.4434 12.375H6.55664C6.76758 13.2539 7.01367 13.9922 7.33008 14.625C8.06836 16.0664 8.73633 16.3125 9.01758 16.3125ZM6.27539 10.6875H11.7246C11.7949 10.1602 11.8301 9.59766 11.8301 9C11.8301 8.4375 11.7949 7.875 11.7246 7.3125H6.27539C6.20508 7.875 6.20508 8.4375 6.20508 9C6.20508 9.59766 6.20508 10.1602 6.27539 10.6875ZM6.55664 5.625H11.4434C11.2676 4.78125 10.9863 4.04297 10.6699 3.41016C9.9668 1.96875 9.26367 1.6875 9.01758 1.6875C8.73633 1.6875 8.06836 1.96875 7.33008 3.41016C7.01367 4.04297 6.76758 4.78125 6.55664 5.625ZM13.4121 7.3125C13.4824 7.875 13.4824 8.4375 13.4824 9C13.4824 9.59766 13.4824 10.1602 13.4121 10.6875H16.1191C16.2598 10.1602 16.3301 9.59766 16.3301 9C16.3301 8.4375 16.2598 7.875 16.1191 7.3125H13.4121ZM15.4863 5.625C14.748 4.18359 13.5176 3.02344 12.041 2.35547C12.5332 3.26953 12.9199 4.39453 13.166 5.625H15.4863ZM4.83398 5.625C5.08008 4.39453 5.4668 3.26953 5.95898 2.35547C4.48242 3.02344 3.25195 4.18359 2.51367 5.625H4.83398ZM1.88086 7.3125C1.77539 7.875 1.70508 8.4375 1.70508 9C1.70508 9.59766 1.74023 10.1602 1.88086 10.6875H4.58789C4.51758 10.1602 4.51758 9.59766 4.51758 9C4.51758 8.4375 4.51758 7.875 4.58789 7.3125H1.88086ZM12.041 15.6797C13.5176 15.0117 14.748 13.8516 15.4863 12.375H13.166C12.9199 13.6406 12.5332 14.7656 12.041 15.6797ZM5.95898 15.6797C5.4668 14.7656 5.08008 13.6406 4.83398 12.375H2.51367C3.25195 13.8516 4.48242 15.0117 5.95898 15.6797ZM9.01758 18C5.7832 18 2.83008 16.3125 1.21289 13.5C-0.404297 10.7227 -0.404297 7.3125 1.21289 4.5C2.83008 1.72266 5.7832 0 9.01758 0C12.2168 0 15.1699 1.72266 16.7871 4.5C18.4043 7.3125 18.4043 10.7227 16.7871 13.5C15.1699 16.3125 12.2168 18 9.01758 18Z"
      className={cx('fill-black', iconClassName)}
    />
  </svg>
)

export const CloseIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M11.9997 10.586L16.9497 5.63599L18.3637 7.04999L13.4137 12L18.3637 16.95L16.9497 18.364L11.9997 13.414L7.04974 18.364L5.63574 16.95L10.5857 12L5.63574 7.04999L7.04974 5.63599L11.9997 10.586Z"
      className={cx('fill-[#ffffff]', iconClassName)}
    />
  </svg>
)

export const HomeIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className={cx('fill-[#000000]', iconClassName)} d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" /></svg>
)

export const LogOutIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} {...props} width="48" height="48" viewBox="0 0 24 24"><path className={cx('fill-[#000000]', iconClassName)} d="M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m3 9h11.25L16 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L19.25 13H8z" /></svg>
)

export const NotificationIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg className={className} {...props} width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={iconClassName} d="M6.49993 1.52746V0.5H5.49993V1.52746C3.24996 1.77619 1.49993 3.68372 1.49993 6V10.5L0.599931 11.7C0.352718 12.0296 0.587908 12.5 0.999931 12.5H3.54994C3.78158 13.6411 4.79045 14.5 5.99993 14.5C7.20941 14.5 8.21829 13.6411 8.44992 12.5H10.9999C11.412 12.5 11.6471 12.0296 11.3999 11.7L10.4999 10.5V6C10.4999 3.68372 8.74991 1.77619 6.49993 1.52746ZM2.49993 10.8333V6C2.49993 4.067 4.06693 2.5 5.99993 2.5C7.93293 2.5 9.49993 4.067 9.49993 6V10.8333L9.99993 11.5H1.99993L2.49993 10.8333ZM5.99993 13.5C5.34682 13.5 4.7912 13.0826 4.58528 12.5H7.41458C7.20866 13.0826 6.65304 13.5 5.99993 13.5Z" />
  </svg>
)

export const AccountIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} className={className} width="24" height="24" viewBox="0 0 24 24">
    <path className={iconClassName} fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1" />
  </svg>
)

export const LocIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path className={iconClassName} fill="currentColor" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
  </svg>
)

export const JobIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} {...props} width="24" height="24" viewBox="0 0 24 24">
    <path className={iconClassName} fill="currentColor" d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2z" />
  </svg>
)

export const CompanyIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} {...props} width="24" height="24" viewBox="0 0 384 512">
    <path className={iconClassName} fill="currentColor" d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z" />
  </svg>
)

export const BulbIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className} {...props}>
    <path className={iconClassName} fill="currentColor" d="M20 11h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12zM12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1.86 1.27 3.43 3 3.87z" />
  </svg>
)

export const EditIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className} {...props}>
    <path className={iconClassName} fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
  </svg>
)

export const DeleteIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      className={iconClassName}
      fill="currentColor"
      d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Zm3.46-9.12c.3-.3.77-.3 1.06 0L12 11.35l1.48-1.47a.75.75 0 0 1 1.06 1.06L13.06 12.4l1.47 1.48a.75.75 0 1 1-1.06 1.06L12 13.46l-1.48 1.48a.75.75 0 0 1-1.06-1.06l1.47-1.48-1.47-1.47a.75.75 0 0 1 0-1.06ZM15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5Z"
    />
  </svg>
)


export const AdminIcon: React.FC<IconProps> = ({
  iconClassName,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      className={cx('fill-[#000000]', iconClassName)}
      d="M12 1L15 6h6l-4.5 4 1.5 6.5L12 13l-6 3.5L7.5 10 3 6h6z"
    />
  </svg>
)