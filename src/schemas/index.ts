import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, {
    message: 'A senha deve ter pelo menos 6 caracteres',
  }),
});
