import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "./api";

export const useGetCategory = (params) => {
  return useQuery({
    queryKey: ["category", params],
    queryFn: async () => await getAllCategory(params),
  });
};

export const useGetCategoryById = (id) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: async () => await getCategoryById(id),
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: ["create-category"],
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.category_name);
      formData.append("description", data.category_description);

      return await createCategory(formData);
    },
  });
};

export const useUpdateCategory = (id) => {
  return useMutation({
    mutationKey: ["update-category"],
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.category_name);
      formData.append("description", data.category_description);
      return await updateCategory(id, formData);
    },
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationKey: ["delete-category"],
    mutationFn: async (id) => {
      return await deleteCategory(id);
    },
  });
};
