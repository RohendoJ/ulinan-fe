import { useMutation } from "@tanstack/react-query";
import { updateAvatar, updatePassword, updateProfile } from "./api";

export const useUpdateProfile = () => {
  return useMutation({
    mutationKey: ["update-profile"],
    mutationFn: async (data) => {
      return await updateProfile(data);
    },
  });
};

export const useUpdateAvatar = () => {
  return useMutation({
    mutationKey: ["update-avatar"],
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("avatar", data);
      return await updateAvatar(formData);
    },
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationKey: ["update-password"],
    mutationFn: async (data) => {
      return await updatePassword(data);
    },
  });
};
