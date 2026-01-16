import { useMutation } from "@tanstack/react-query";
import { asyncLoginUser } from "./fetchers";
import { useAuthStore } from "./store";

export const useAsyncLogin = () => {
  const login = useAuthStore((state) => state.login);
  return useMutation({
    mutationFn: asyncLoginUser,
    onSuccess: (data) => {
      login(data.data.token, data.data.user);
      //   console.log(data.data.user, data.token);
    },
  });
};
