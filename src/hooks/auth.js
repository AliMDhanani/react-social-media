import { useToast } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "lib/firebase";
import { DASHBOARD, LOGIN } from "lib/routes";
import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [authUser, isLoading, error] = useAuthState(auth);

  return { user: authUser, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = DASHBOARD }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "you are logged in",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Logging in failed",
        description: error.message,
        status: "error",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      setLoading(false);
      return false; //Return false if login failed
    }
    setLoading(false);
    return true; //Return false if login succeeded
  }

  return { login, isLoading };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const toast = useToast();
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      toast({
        title: "successfully logged out",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      navigate(LOGIN);
    } // else: show error [signOut() returns false if failed]
  }

  return { logout, isLoading };
}
