import { api } from "../../../../services/axios";

export const updateProfile = async (payload) => {
  const { data } = await api.patch("/api/user/me/profile", payload);
  return data;
};

export const updatePassword = async (payload) => {
  const { data } = await api.patch("/api/user/me/change-password", payload);
  return data;
};

export const updateAvatar = async (payload) => {
  const { data } = await api.patch("/api/user/me/avatar", payload);
  return data;
};
