import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(8, 'Mínimo de 8 caracteres'),
  passwordConfirmation: Yup.string().oneOf(
    [null, Yup.ref('password')],
    'As senhas devem ser iguais'
  ),
});

export default function CreateUser(): JSX.Element {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid
                minChildWidth="240px"
                spacing={['6', '8']}
                width="100%"
              >
                <Input
                  name="name"
                  label="Nome completo"
                  error={formState.errors.name}
                  {...register('name')}
                />
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={formState.errors.email}
                  {...register('email')}
                />
              </SimpleGrid>
              <SimpleGrid
                minChildWidth="240px"
                spacing={['6', '8']}
                width="100%"
              >
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={formState.errors.password}
                  {...register('password')}
                />
                <Input
                  name="passwordConfirmation"
                  type="password"
                  label="Confirmação da senha"
                  error={formState.errors.passwordConfirmation}
                  {...register('passwordConfirmation')}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
