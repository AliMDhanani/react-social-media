import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "components/profile/UsernameButton";

export default function Header({ uid, date }) {
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading user...";

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="green.100"
      p="3"
      bg="gray.50"
    >
      <Avatar user={user} size="md" />

      <Box ml="4">
        <UsernameButton user={user} />
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}
