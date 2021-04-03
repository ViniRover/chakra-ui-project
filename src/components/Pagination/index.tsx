import { Stack, Button, Box } from '@chakra-ui/react';
import { PaginationButton } from './PaginationButton';

export function Pagination(): JSX.Element {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack spacing="2" direction="row">
        <PaginationButton isCurrent page={1} />
        <PaginationButton page={2} />
        <PaginationButton page={3} />
        <PaginationButton page={4} />
      </Stack>
    </Stack>
  );
}
