import { Metadata } from 'next';

import { UserAuthFormRegister } from '@/components/auth/UserAuthFormRegister';
import { Auth } from '@/components/auth/Auth';

export const metadata: Metadata = {
  title: 'Criar Conta',
  description: 'Criar Conta',
};

export default function Register() {
  return (
    <Auth>
      <UserAuthFormRegister />
    </Auth>
  );
}
