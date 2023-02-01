import { Button, Flex, Link, Icon } from "@chakra-ui/react";
import { useLogout } from "hooks/auth";
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { FaKiwiBird } from "react-icons/fa";

export default function Navbar() {
    const {logout, isLoading} = useLogout();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="green.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="green" as={RouterLink} to={DASHBOARD} fontWeight="bold" fontSize="2xl" textDecor="none">
          <Icon as={FaKiwiBird} /> { }
        </Link>
        <Button
          ml="auto"
          colorScheme="green"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >Logout</Button>
      </Flex>
    </Flex>
  );
}

