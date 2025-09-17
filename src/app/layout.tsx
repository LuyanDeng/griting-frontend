import type { Metadata } from 'next'
// import CustomScrollbar from 'custom-react-scrollbar'
import Navbar from '@/modules/NavBar'
import Providers from '@/modules/Providers'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'HYSTA',
  description: 'Elevate entrepreneurship & leadership for Chinese Americans',
  robots: 'hysta, index',
  // openGraph: {
  //   url: 'https://hysta.vercel.app/',
  //   type: 'website',
  //   siteName: 'HYSTA',
  //   description: 'Elevate entrepreneurship & leadership for Chinese Americans',
  //   title: 'HYSTA',
  //   images: '/imgs/og.png',
  // },
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
  }>
) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        {/* <meta name="robots" content="hysta, index" /> */}
        <link href="/logo_alt.png" rel="shortcut icon" />
        <meta property="og:url" content="https://hysta.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HYSTA" />
        <meta
          property="og:description"
          content="Elevate entrepreneurship & leadership for Chinese Americans"
        />
        <meta property="og:title" content="HYSTA" />
        <meta property="og:image" content="/imgs/og.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Just+Another+Hand&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        cz-shortcut-listen="true"
        className="font-['Montserrat',sans-serif]"
      >
        <Providers>
          <Navbar />
          {/* <CustomScrollbar className="main-scroller" contentClassName=""> */}
          {children}
          {/* </CustomScrollbar> */}
        </Providers>
      </body>
    </html>
  )
}
