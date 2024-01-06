import { useQuery } from "@tanstack/react-query";
import { getCardDashboard } from "./api";

export const useGetCardDashboard = () => {
  return useQuery({
    queryKey: ["get-card-dashboard"],
    queryFn: async () => await getCardDashboard(),
  });
};
