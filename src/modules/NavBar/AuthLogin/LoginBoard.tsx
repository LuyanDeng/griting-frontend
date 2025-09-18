'use client'
import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import CusInput from '@/components/Input'
import useInTranscation from '@/hooks/useInTransaction'
import { useLogin, LoginInfo } from '@/services/profile/login'
import ResetBoard from './ResetBoard'

const LoginBoardWrapper: React.FC = () => {
  const [isReset, setIsReset] = useState(false)

  const resetPassword = useCallback(() => {
    setIsReset(true)
  }, [])

  return (
    <div className='flex flex-col items-center w-full gap-y-[16px] text-[#555555]'>
      {isReset ? <ResetBoard /> : <LoginBoard resetPassword={resetPassword} />}
    </div>
  )
}

interface LoginBoardProps {
  resetPassword: () => void
}

const LoginBoard: React.FC<LoginBoardProps> = ({ resetPassword }) => {
  const {
    register,
    handleSubmit: withSubmit,
    formState: { errors,isSubmitting },
  } = useForm<LoginInfo>()
  const login = useLogin()
  const submittingRef = useRef(false);


  const handleSubmit = useCallback(async (data: LoginInfo) => {
    if (submittingRef.current) {
      console.log('Form submission already in progress, ignoring duplicate submit');
      return;
    }
    try {
      submittingRef.current = true;
      await login(data);
    } finally {
      // Reset after a delay to prevent rapid re-submissions
      setTimeout(() => {
        submittingRef.current = false;
      }, 2000); // 2 second cooldown
    }
  }, [login]);
  //   await login(data)
  // }, [])

  const { inTranscation, execTranscation } = useInTranscation(handleSubmit)
  const isLoading = inTranscation || isSubmitting || submittingRef.current;
  // Prevent form submission with Enter key if already submitting
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isLoading) {
      e.preventDefault();
      console.log('Preventing duplicate submission via Enter key');
    }
  }, [isLoading]);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);
  return (
    <form
      onSubmit={withSubmit(execTranscation)}
      onKeyDown={handleKeyDown}
      className="flex flex-col items-center w-full gap-y-[16px] text-[#fff]"
    >
      <div className="flex flex-col gap-y-[8px] w-full min-w-[300px]">
        <CusInput
          title='Email'
          error={!!errors.email}
          className="w-full"
          placeholder="Please enter your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email',
            },
          })}
          disabled={inTranscation}
        />
        {errors.email && (
          <span className="text-[12px] text-[#E96170]">
            Please enter a valid email
          </span>
        )}
      </div>
      <div className="flex flex-col gap-y-[8px] w-full relative">
        <CusInput
          title='Password'
          error={!!errors.password}
          className="w-full"
          placeholder="Please enter your Password"
          {...register('password', {
            required: true
          })}
          //type='password'
          type={showPassword ? 'text' : 'password'}
          disabled={inTranscation}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-3/4 -translate-y-1/2 text-sm text-gray-300"
        >
          {showPassword ? (
            // Eye Off 
            <svg fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M14.765 6.076a.5.5 0 0 1 .159.689 9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53 8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159Z" fillRule="evenodd"></path>
            </svg>
          ) : (
            // Eye open
            <svg fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11Zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3Zm0 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fillRule="evenodd" />
            </svg>
          )}
        </button>
        {errors.password && (
          <span className="text-[12px] text-[#E96170]">
            Password is required
          </span>
        )}
      </div>
      <div className='flex w-full'>
        <span className='cursor-pointer underline' onClick={resetPassword}>Reset Password</span>
      </div>
      <Button loading={inTranscation} color="white" type="submit" className="w-full">
        Submit
      </Button>
    </form>
  )
}

export default LoginBoardWrapper

