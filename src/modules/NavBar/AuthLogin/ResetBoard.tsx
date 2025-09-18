"use client"
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import CusInput from '@/components/Input'
import useInTranscation from '@/hooks/useInTransaction'
import { useLogin, useResetPassword } from '@/services/profile/login'

const ResetBoard: React.FC = () => {
   const {
      register,
      handleSubmit: withSubmit,
      formState: { errors },
   } = useForm<{ email: string }>()
   const resetPassword = useResetPassword()

   const handleSubmit = useCallback(async (data: any) => {
      await resetPassword(data.email)
   }, [])

   const { inTranscation, execTranscation } = useInTranscation(handleSubmit)

   return (
      <form
         onSubmit={withSubmit(execTranscation)}
         className="flex flex-col items-center w-full gap-y-[16px] text-[#555555]"
      >
         <div className="flex flex-col gap-y-[8px] w-full min-w-[300px]">
            <CusInput
               autoFocus
               title='Email'
               error={!!errors.email}
               className="w-full"
               placeholder="Please enter your Email"
               color="light"
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
         <Button loading={inTranscation} color="black" type="submit" className="w-full">
            Submit
         </Button>
      </form>)
}

export default ResetBoard