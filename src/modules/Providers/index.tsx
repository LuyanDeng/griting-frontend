'use client'
import { ReactNode } from 'react'
import { Provider } from 'jotai'
import ToastRender from '@/components/Toast'
import ModalRender from '@/components/Modal'

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider>
      <ModalRender />
      <ToastRender />
      {children}
    </Provider>
  )
}

export default Providers
