import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthFormRegister } from '@/components/UserAuthFormRegister';
import { AiOutlineHome } from 'react-icons/ai';

export const metadata: Metadata = {
  title: 'Criar Conta',
  description: 'Criar Conta',
};

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          Lorem
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="flex justify-between">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'py-2 px-4 text-lg',
            )}
          >
            <AiOutlineHome /> Página inicial
          </Link>{' '}
          <Link
            href="/auth/login"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'py-2 px-4 text-lg',
            )}
          >
            Fazer Login
          </Link>
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar uma conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Insira seu e-mail e uma senha abaixo para criar sua conta
            </p>
          </div>
          <UserAuthFormRegister />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao clicar em Criar Conta, você concorda com nossos{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{' '}
            e{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
