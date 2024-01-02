import { api } from "../../lib/axios";

export const registerRequest = async (payload) => {
  const { data } = await api.post("/api/auth/register", payload);

  return data;
};

export const loginRequest = async (payload) => {
  const { data } = await api.post("/api/auth/login", payload);

  return data;
};
