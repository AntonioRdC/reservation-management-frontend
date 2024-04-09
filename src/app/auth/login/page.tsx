import { AiOutlineHome } from 'react-icons/ai';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { UserAuthForm } from '@/components/UserAuthForm';

export const metadata: Metadata = {
  title: 'Fazer Login',
  description: 'Fazer Login',
};

export default function Login() {
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
          </Link>
          <Link
            href="/auth/register"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'py-2 px-4 text-lg',
            )}
          >
            Criar Conta
          </Link>
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Fazer Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Insira seu e-mail e senha abaixo para fazer login na sua conta
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao clicar em Fazer Login, você concorda com nossos{' '}
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
