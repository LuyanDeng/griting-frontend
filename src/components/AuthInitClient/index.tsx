'use client';

import { useInitiateAuth } from '@/services/profile/login';

export default function AuthInitClient() {
  useInitiateAuth(); 
  return null;
}
