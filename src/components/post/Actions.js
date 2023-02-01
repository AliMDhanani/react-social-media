import { Flex, IconButton } from "@chakra-ui/react";

export default function Actions() {
  return (
    <Flex p="2">
        <Flex alignItems="center">
            <IconButton size="md" colorScheme="red" variant="ghost" />
        </Flex>
    </Flex>
  )
}
