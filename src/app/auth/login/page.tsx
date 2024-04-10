import { AiOutlineHome } from 'react-icons/ai';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/auth/UserAuthForm';
import { Auth } from '@/components/auth/Auth';

export const metadata: Metadata = {
  title: 'Fazer Login',
  description: 'Fazer Login',
};

export default function Login() {
  return (
    <Auth>
      <UserAuthForm />
    </Auth>
  );
}
