'use client'
import { useState, ComponentProps, useCallback, forwardRef } from 'react'
import cx from 'clsx'
import {
  useFloating,
  autoUpdate,
  useClick,
  useInteractions,
  useDismiss,
  offset,
  type Placement,
} from '@floating-ui/react'
import { ArrowHead, Checked } from '@/components/Icons'

export interface Option {
  label: string
  value: string | number
}

type SelectProps = OverWrite<
  ComponentProps<'select'>,
  {
    placeholder?: string
    placement?: Placement
    options: Option[]
    defaultValue?: Option[]
    wrapperClassName?: string
    error?: boolean
  }
>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      className,
      wrapperClassName,
      defaultValue,
      placeholder = 'Select',
      placement = 'bottom',
      onChange,
      name,
      error,
      ...props
    },
    ref
  ) => {
    const [selectedOptions, setSelectedOption] = useState<Option[] | undefined>(
      defaultValue
    )
    const [isOpen, setIsOpen] = useState(false)
    // const [isHover, setIsHover] = useState(false)

    const { refs, floatingStyles, context } = useFloating({
      middleware: [offset(6)],
      placement: placement,
      whileElementsMounted: autoUpdate,
      open: isOpen,
      onOpenChange: setIsOpen,
    })

    const click = useClick(context, { event: 'mousedown' })
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' })

    // const handleMouseEnter = useCallback(() => {
    //   setIsHover(true)
    // }, [])

    // const handleMouseLeave = useCallback(() => {
    //   setIsHover(false)
    // }, [])

    const { getReferenceProps, getFloatingProps } = useInteractions([
      click,
      dismiss,
    ])

    const handleSelect = useCallback(
      (option: Option) => {
        if (selectedOptions?.some((ele) => ele.value === option.value)) {
          const newVal = selectedOptions?.filter(
            (ele) => ele.value !== option.value
          )
          setSelectedOption(newVal)
          onChange?.({ target: { value: newVal, name } } as any)
        } else {
          const newVal = [...(selectedOptions ?? []), option]
          setSelectedOption(newVal)
          onChange?.({ target: { value: newVal, name } } as any)
        }
        setIsOpen(false)
      },
      [onChange, selectedOptions]
    )

    // console.log(
    //   'selectedOptions',
    //   selectedOptions,
    //   ' display: ',
    //   selectedOptions?.map((opts) => opts.label).join(', ')
    // );

    // const handleClear = useCallback((e: MouseEvent) => {
    //   e.preventDefault();
    //   setSelectedOption(undefined);
    // }, []);

    return (
      <div
        className={cx('relative', wrapperClassName)}
        suppressHydrationWarning
      >
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          className={cx(
            'p-[16px] flex items-center justify-between w-full h-[56px] text-[14px] lg:text-[16px] leading-[24px] text-[#FFFFFF] rounded-[16px] border-[#FFFFFF] border-[1px] border-solid focus:border-[#FFFFFF] hover:border-[#FFFFFF] cursor-pointer text-ellipsis overflow-hidden',
            isOpen && 'border-[#ffffff]',
            error && '!border-[#E96170]',
            className
          )}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
          {selectedOptions ? (
            <div className="text-[#FFFFFF] truncate">
              {selectedOptions.map((opts) => opts.label).join(', ')}
            </div>
          ) : (
            <span className="text-[14px] lg:text-[16px] text-[#979797] whitespace-nowrap">
              {placeholder}
            </span>
          )}
          <div className="flex items-center justify-center w-18px h-18px">
            {/* TODO: clear selected */}
            {/* {!isOpen && isHover && selectedOptions && (
            <div
              className="i-ic:sharp-cancel text-#595A5B cursor-pointer z-200"
              onClick={(e) => {
                handleClear(e);
              }}
            />
          )} */}
            <ArrowHead className={cx('rotate-[180deg] text-[#979797]')} />
          </div>
        </div>
        {isOpen && (
          <div
            className="w-full bg-[#333333] border-solid border-[1px] border-[#FFFFFF] rounded-[16px] shadow-[0px_4px_20px_0px_#00000080] overflow-hidden z-[1000]"
            ref={refs.setFloating}
            style={{ ...floatingStyles }}
            {...getFloatingProps()}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={cx(
                  'p-[16px] flex items-center justify-between w-full h-[56px] text-[12px] text-[14px] leading-[24px] text-[#FFFFFF] hover:bg-[#222222] cursor-pointer',
                  selectedOptions?.some((ele) => ele.value === option.value)
                    ? 'bg-[#222222]'
                    : 'bg-[#333333]'
                )}
                onClick={() => handleSelect(option)}
              >
                {option.label}
                {selectedOptions?.some((ele) => ele.value === option.value) && (
                  <Checked className="text-[#FFFFFF]" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)

export default Select
