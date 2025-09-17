import { useEffect } from 'react'
import { useAtom, useSetAtom } from 'jotai'
import { atomWithQuery, atomWithMutation, queryClientAtom } from 'jotai-tanstack-query'
import { useRouter } from 'next/navigation'
import { useShowToast } from '@/components/Toast'
import { ProfileData } from '@/types/Profile'
import { fetchApi } from '@/utils/fetch'

import { userAtom, idTokenAtom } from './login'
export * from './login'

export interface ProfileFormData extends Omit<ProfileData, 'profileImage'> {
   profileImage: FileList | string
}

export const defaultProfile: ProfileFormData = {
   id: '',
   firstName: '',
   lastName: '',
   jobTitle: '',
   email: '',
   profileImage: '/imgs/default.png',
   role: ''
}

export const profileAtom = atomWithQuery<ProfileData | null>((get) => ({
   queryKey: ['profile', get(idTokenAtom)],
   queryFn: async () => {
      const { data: idToken } = get(idTokenAtom);
      //TODO: whether throw error or return null?
      if (!idToken) return null
      const res = await fetchApi<{ data: ProfileData }>({ url: `/api/profile/myprofile`, method: 'GET', idToken: idToken })
      return res.data
   },
   retry: 5
}))



