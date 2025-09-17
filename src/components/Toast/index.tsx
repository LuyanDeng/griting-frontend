'use client'
import React, { useCallback } from 'react'
import cx from 'clsx'
import { uniqueId } from 'lodash-es'
import { atom, useAtom, useSetAtom } from 'jotai'
import { FailedIcon, CloseIcon } from '@/components/Icons'
// import { CheckedIcon, FailedIcon } from '@/components/Icons'

interface Toast {
  content: string | React.ReactNode
  type: 'success' | 'warning' | 'failed'
  id: string
  key?: string
}

const toastAtom = atom<Toast[]>([])

export const showToastAtom = atom(null, (get, set, param: Omit<Toast, 'id'> & { key?: string; duration?: number }) => {
  const toasts = get(toastAtom)
  if (param.key && toasts.find((item) => item.key && item.key === param.key)) return
  const id = uniqueId('toast_')
  set(toastAtom, (toasts) => [...toasts, { ...param, id }])
  setTimeout(() => {
    set(toastAtom, (toastsAfter) =>
      toastsAfter.filter((item) => item.id !== id)
    )
  }, param.duration || 3000)
}
)

export const useShowToast = () => {
  const showToast = useSetAtom(showToastAtom)
  return showToast
}

const ToastRender: React.FC = () => {
  const [toasts, setToasts] = useAtom(toastAtom)

  const handleDelete = useCallback(
    (id: string) => {
      setToasts((toastsAfter) => {
        let newToastsAfter = toastsAfter ? [...toastsAfter] : []
        newToastsAfter = newToastsAfter.filter((item) => item.id !== id)
        return newToastsAfter
      })
    },
    [toasts, toastAtom]
  )

  return (
    <div className="fixed left-0 top-[80px] right-0 flex flex-col justify-center items-center gap-[12px] z-[1000]">
      {toasts.map(({ content, type, id }) => (
        <div
          key={id}
          className={cx(
            'px-[24px] h-[81px] flex flex-row justify-between items-center gap-x-[17px] sm:w-[51.32%] sm:w-fit bg-[#FDF7F7] border-solid border-[1px] rounded-[16px]',
            type === 'success' && 'text-[#1E8E3E]',
            type === 'warning' ||
            (type === 'failed' && 'text-[#7C190E] border-[#FAB5AD]')
          )}
        >
          {/* {type === 'success' ? (
            <CheckedIcon className="w-[14px] h-[40px]" />
          ) : (
            <FailedIcon className="w-[14px] h-[40px]" />
          )} */}
          <div className="flex flex-row items-center gap-x-[17px]">
            {type === 'failed' && <FailedIcon className="w-[48px] h-[49px]" />}
            <div className="flex flex-col justify-between sm:max-w-[1000px] truncate">
              {type === 'failed' && (
                <span className="font-semibold text-[12px] leading-[15.6px]">
                  TRY AGAIN
                </span>
              )}
              <div className="text-[16px] leading-[24px] truncate">
                {content}
              </div>
            </div>
          </div>
          <CloseIcon
            className="w-[16px] h-[16px] fill-[#7C190E] cursor-pointer"
            onClick={() => handleDelete(id)}
          />
        </div>
      ))}
    </div>
  )
}

export default ToastRender
