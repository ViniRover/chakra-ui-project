import { useQuery, UseQueryResult } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type ResponseData = {
  users: User[];
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const response = await api.get<ResponseData>('users', {
    params: {
      page,
    },
  });

  const totalCount = Number(response.headers['x-total-count']);

  const users = response.data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number): UseQueryResult<GetUsersResponse> {
  return useQuery(`users${page}`, () => getUsers(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
