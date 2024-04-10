'use client';

import * as React from 'react';
import { FaGoogle } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthFormRegister({
  className,
  ...props
}: UserAuthFormProps) {
  return (
    <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex justify-between">
        <Link href="/">
          <Button variant={'outline'} className="py-2 px-4 text-lg mt-4 ml-4">
            <AiOutlineHome className="mr-2" /> Página inicial
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button variant={'outline'} className="py-2 px-4 text-lg mt-4 mr-4">
            Fazer Login
          </Button>
        </Link>
      </div>
      <CardHeader className="items-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Criar uma conta
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Insira seu e-mail e uma senha abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <form onSubmit={() => {}} className="mx-1">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="senha"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="senha"
                  autoCorrect="off"
                />
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="repeatpassword">
                  Repeatpassword
                </Label>
                <Input
                  id="repeatpassword"
                  placeholder="repetir a senha"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="repetir a senha"
                  autoCorrect="off"
                />
              </div>
              <Button>Criar Conta</Button>
            </div>
          </form>
          <div className="relative mx-1">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <Button variant="outline" type="button" className="mx-1">
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>{' '}
        </div>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  );
}
