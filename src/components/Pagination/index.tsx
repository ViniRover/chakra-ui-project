import { Stack, Box, Text } from '@chakra-ui/react';
import { PaginationButton } from './PaginationButton';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number): number[] {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  onPageChange,
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
}: PaginationProps): JSX.Element {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>{(currentPage - 1) * registersPerPage}</strong> -{' '}
        <strong>{currentPage * registersPerPage}</strong> de{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <Stack spacing="2" direction="row">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationButton onPageChange={onPageChange} page={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map(page => (
            <PaginationButton
              onPageChange={onPageChange}
              page={page}
              key={page}
            />
          ))}

        <PaginationButton
          onPageChange={onPageChange}
          isCurrent
          page={currentPage}
        />

        {nextPages.length > 0 &&
          nextPages.map(page => (
            <PaginationButton
              onPageChange={onPageChange}
              page={page}
              key={page}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationButton onPageChange={onPageChange} page={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
