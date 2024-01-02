import { useMutation } from "@tanstack/react-query";
import { loginRequest, registerRequest } from "./api";

export const useRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (params) => await registerRequest(params),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (params) => await loginRequest(params),
  });
};
