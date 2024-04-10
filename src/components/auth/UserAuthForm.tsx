'use client';

import { useState, useTransition, HTMLAttributes } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineHome } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { loginFormSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormError } from '@/components/FormError';
import { FormSuccess } from '@/components/FormSuccess';
import { login } from '@/actions/login';

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();

            setError(data.error);
          }

          if (data?.success) {
            form.reset();

            setSuccess(data.success);
          }
        })
        .catch(() => setError('Algo deu errado'));
    });
  };

  return (
    <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex justify-between">
        <Link href="/">
          <Button variant={'outline'} className="py-2 px-4 text-lg mt-4 ml-4">
            <AiOutlineHome className="mr-2" /> Página inicial
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button variant={'outline'} className="py-2 px-4 text-lg mt-4 mr-4">
            Criar Conta
          </Button>
        </Link>
      </div>
      <CardHeader className="items-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Fazer Login
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Insira seu e-mail e senha abaixo para fazer login na sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="antonio.ribeiro@example.com"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      >
                        <Link href="/auth/reset">Esqueceu a senha?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full">
                Fazer Login
              </Button>
            </form>
          </Form>
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
      </CardFooter>
    </Card>
  );
}
