'use server';

import axios, { AxiosResponse } from 'axios';

interface LoginData {
  email: string;
  password: string;
}

interface Request {
  access_token?: string;
  message?: string;
}

interface LoginResponse {
  message?: string;
  status?: number;
}

async function loginUser({
  email,
  password,
}: LoginData): Promise<LoginResponse> {
  try {
    console.log(email, password);

    const response: AxiosResponse<Request> = await axios.post(
      `${process.env.API_URL}/auth/login`,
      {
        email,
        password,
      },
    );

    return {
      message: response.data.access_token,
      status: response.status,
    };
  } catch (error: any) {
    return { message: 'Algo deu errado' };
  }
}

export { loginUser };
