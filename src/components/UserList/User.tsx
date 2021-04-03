import {
  Tr,
  Td,
  Box,
  Checkbox,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

interface UserProps {
  name: string;
  email: string;
  dateOfSingUp: string;
}

export function User({ name, email, dateOfSingUp }: UserProps): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Tr>
      <Td px={['4', '4', '6']}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="small" color="gray.300">
            {email}
          </Text>
        </Box>
      </Td>
      {isWideVersion && <Td>{dateOfSingUp}</Td>}
    </Tr>
  );
}
