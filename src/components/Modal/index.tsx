'use client'
// TODO: Add animation
import { ReactNode, useCallback } from 'react'
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useId,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react'
import { atom, useAtom } from 'jotai'
import cx from 'clsx'
import { uniqueId } from 'lodash-es'
import { CloseIcon } from '../Icons'
import renderReactNode from '@/utils/renderReactNode'
import './index.css'

export interface Modal {
  id: string
  title: string
  content: ReactNode
  headClass?: string
  containerClass?: string
  wrapperClass?: string
}

const modalAtom = atom<Modal | null>(null)

export const showModalAtom = atom(null, (get, set, param?: Omit<Modal, 'id'>) => {
  if (!param) return
  set(modalAtom, { ...param, id: uniqueId() })
})

export const hideModalAtom = atom(null, (get, set) => {
  set(modalAtom, null)
})

const ModalRender: React.FC = () => {
  const [modal, setModal] = useAtom(modalAtom)

  const handleOpen = useCallback((open: boolean, event?: Event) => {
    if (!open) setModal(null)
  }, [])

  const { refs, context } = useFloating({
    open: !!modal,
    onOpenChange: handleOpen,
  })

  const click = useClick(context)

  const dismiss = useDismiss(context, {
    outsidePressEvent: 'mousedown',
  })

  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])

  const labelId = useId()

  const descriptionId = useId()

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}></div>
      {!!modal && (
        <FloatingOverlay
          lockScroll
          className={cx(
            'flex items-center justify-center backdrop-blur-[15px] z-10 modal-fade-in',
            modal?.containerClass
          )}
        >
          <FloatingFocusManager context={context}>
            <div
              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              {...getFloatingProps()}
            >
              <div
                className={cx(
                  'p-[27px] min-w-[311px] rounded-[12px] border-[1px] border-solid border-[#ffffff] bg-[rgba(36,30,58,0.12)] backdrop-blur-[103px] modal-zoom-in',
                  modal?.wrapperClass
                )}
              >
                <div
                  className={cx(
                    'flex justify-between items-center h-[36px] text-[24px] leading-[36px] -tracking-[0.46px] text-[#ffffff29] font-semibold',
                    modal?.headClass
                  )}
                >
                  {modal?.title}
                  <div
                    className="w-fit h-fit -translate-y-[11px] cursor-pointer"
                    onClick={() => setModal(null)}
                  >
                    <CloseIcon />
                  </div>
                </div>
                {/* <div className="h-[1px] bg-[#EBEDF0] pointer-events-none" /> */}
                <div className="pt-[29px]">
                  {renderReactNode(modal?.content)}
                </div>
              </div>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  )
}

export default ModalRender
