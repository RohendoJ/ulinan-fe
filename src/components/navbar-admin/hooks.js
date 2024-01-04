import { useQuery } from "@tanstack/react-query";
import { getUserMe } from "./api";

export const useGetUserMe = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => await getUserMe(),
  });
};
