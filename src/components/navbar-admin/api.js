import { api } from "../../services/axios";

export const getUserMe = async () => {
  const { data } = await api.get("/api/user/me");
  return data;
};
