"use client"
import { useCallback, ReactNode } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { showModalAtom } from '@/components/Modal'
import Button from '@/components/Button'
import { userAtom } from '@/services/profile'
import LoginBoard from './LoginBoard'
import { ThemeColor } from '../GlobalNav'

export interface AuthLoginProps {
  color: ThemeColor
  children?: ReactNode
}

const AuthLogin: React.FC<AuthLoginProps> = ({ color, children }) => {
  const isAuthenticated = !!useAtomValue(userAtom)
  const showModal = useSetAtom(showModalAtom)

  const handleLogin = useCallback(() => {
    showModal({
      title: 'Log in',
      content: <LoginBoard />,
    })
  }, [])

  if (!isAuthenticated) return (
    <Button onClick={handleLogin}  color="black">
      Log in
    </Button>
  )
  return <>{children}</>
}

export default AuthLogin
