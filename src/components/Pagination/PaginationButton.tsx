import { Button, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface PaginationButtonProps extends ChakraButtonProps {
  isCurrent?: boolean;
  page: number;
}

export function PaginationButton({
  isCurrent = false,
  page,
  ...rest
}: PaginationButtonProps): JSX.Element {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
        {...rest}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      {...rest}
    >
      {page}
    </Button>
  );
}
