import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/utils';
import { useShowToast } from '@/components/Toast';
import { hideModalAtom } from '@/components/Modal';

// 模拟用户对象
export interface User {
  id: string;
  email: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

// userAtom 存储登录状态
export const userAtom = atomWithStorage<User | null>('user', null);

// idTokenAtom 占位符（这里直接返回 null）
export const idTokenAtom = atomWithQuery<string | null>(() => ({
  queryKey: ['idToken'],
  queryFn: async () => null,
  staleTime: 1000 * 60 * 60,
}));

// 初始化监听（前端 mock：直接返回 null）
export const useInitiateAuth = () => {
  const setUser = useSetAtom(userAtom);
  useEffect(() => {
    setUser(null);
  }, []);
};

// 登录 Hook（纯前端模拟）
export const useLogin = () => {
  const setUser = useSetAtom(userAtom);
  const showToast = useShowToast();
  const hideModal = useSetAtom(hideModalAtom);
  const navigation = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = useCallback(
    async (loginInfo: LoginInfo) => {
      try {
        setIsLoggingIn(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!loginInfo.email || !loginInfo.password) {
          showToast({ type: 'failed', content: 'Please provide email and password' });
          return;
        }

        const mockUser: User = { id: '123', email: loginInfo.email };

        setUser(mockUser);
        navigation.push('/profile');
        showToast({ type: 'success', content: 'Login successful' });
        hideModal();
      } catch (error) {
        console.error('Login error:', error);
        showToast({ type: 'failed', content: 'Failed to login' });
      } finally {
        setIsLoggingIn(false);
      }
    },
    [setUser, showToast, hideModal, navigation]
  );

  return login;
};

export const useResetPassword = () => {
  const showToast = useShowToast();
  const hideModal = useSetAtom(hideModalAtom);

  const resetPassword = useCallback(async (email: string) => {
    try {
      if (!email) {
        showToast({ type: 'failed', content: 'Please enter an email' });
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      hideModal();
      showToast({ type: 'success', content: 'Mock: password reset email sent' });
    } catch (error) {
      console.error(error);
      showToast({ type: 'failed', content: 'Failed to send reset email' });
    }
  }, []);

  return resetPassword;
};


export const useSignOut = () => {
  const setUser = useSetAtom(userAtom);
  const showToast = useShowToast();
  const navigation = useRouter();

  const handleSignOut = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setUser(null);
      navigation.push('/');
      showToast({ type: 'success', content: 'Signed out successfully' });
    } catch (error) {
      console.error(error);
      showToast({ type: 'failed', content: 'Failed to sign out' });
    }
  }, []);

  return handleSignOut;
};
