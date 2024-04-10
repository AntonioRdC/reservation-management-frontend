'use server';

import * as z from 'zod';

import { loginFormSchema } from '@/schemas';
import { loginUser } from '@/api/auth.service';

export const login = async (values: z.infer<typeof loginFormSchema>) => {
  const validatedFields = loginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Campos inválidos!' };
  }

  const { email, password } = validatedFields.data;

  const response = await loginUser({ email, password });

  if (response.status !== 201) {
    return { error: response.message };
  }

  console.log(response.message);
  return {
    success: 'E-mail enviado, por favor verifique seu e-mail',
  };
};
