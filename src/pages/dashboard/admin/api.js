import { api } from "../../../services/axios";

export const getCardDashboard = async () => {
  const { data } = await api.get("/api/dashboard");
  return data;
};
