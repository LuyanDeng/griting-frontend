import React, {
  forwardRef,
  type PropsWithChildren,
  useState,
  useCallback,
} from 'react'
import cx from 'clsx'
import styles from './index.module.css'

//TODO: combine with Button component
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'black' | 'white' | 'linear'
  variant?: 'contained' | 'outlined' | 'text'
  fullWidth?: boolean
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
  iconH?: 'RArrow'
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      children,
      className,
      disabled = false,
      fullWidth = false,
      loading = false,
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      iconH,
      ...props
    },
    _forwardRef
  ) => {
    return (
      <button
        className={cx(
          'fui-button',
          styles[`fui-button--${variant}`],
          styles[`fui-button--${color}`],
          styles[`fui-button--${size}`],
          !loading && iconH && styles[`fui-button--${iconH}`],
          //  `fui-button--${variant} fui-button--${color} fui-button--${size}`,
          'flex flex-row justify-center items-center whitespace-nowrap cursor-pointer rounded-[15px]',
          (loading || disabled) &&
            'bg-gray-400 opacity-30 pointer-events-none cursor-not-allowed',
          fullWidth ? 'w-full' : 'w-fit',
          className
        )}
        {...props}
      >
        {/* {loading && <Spin className="mr-[8px] w-[18px] h-[18px]" />} */}
        {children}
      </button>
    )
  }
)

export default Button
