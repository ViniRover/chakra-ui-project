import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Checkbox,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { CreateUserButtton } from '../../components/UserList/CreateUserButton';
import { User } from '../../components/UserList/User';

export default function UserList(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <CreateUserButtton />
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <User
                name="Vinicius Rover"
                email="viniciusrover3@gmail.com"
                dateOfSingUp="04 de abril, 2021"
              />
              <User
                name="Vinicius Rover"
                email="viniciusrover3@gmail.com"
                dateOfSingUp="04 de abril, 2021"
              />
              <User
                name="Vinicius Rover"
                email="viniciusrover3@gmail.com"
                dateOfSingUp="04 de abril, 2021"
              />
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
