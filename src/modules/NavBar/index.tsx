'use client'
import useNavStyle from '@/hooks/useNavStyle'
import GlobalNavbar from './GlobalNav'

const Navbar: React.FC = () => {
  const globalNavProps = useNavStyle()

  // if (!globalNavProps) return <AnnualNavbar />
  if (!globalNavProps) return 
  return <GlobalNavbar {...globalNavProps} />
}

export default Navbar
