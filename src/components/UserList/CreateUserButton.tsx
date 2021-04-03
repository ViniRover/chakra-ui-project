import { Icon, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';

export function CreateUserButtton(): JSX.Element {
  return (
    <Link href="/users/create" passHref>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="pink"
        leftIcon={<Icon as={RiAddLine} fontSize="20" />}
      >
        Criar Novo
      </Button>
    </Link>
  );
}
