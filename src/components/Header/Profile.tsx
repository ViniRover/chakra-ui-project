import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfilePros {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfilePros): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Michel Temer</Text>
          <Text color="gray.300" fontSize="small">
            micheltemer@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Michel Temer" />
    </Flex>
  );
}
