import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./api";

export const useGetProducts = (params) => {
  return useQuery({
    queryKey: ["product", params],
    queryFn: async () => await getProducts(params),
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["create-product"],
    mutationFn: async (data) => {
      return await createProduct(data);
    },
  });
};

export const useGetProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => await getProductById(id),
  });
};

export const useUpdateProduct = (id) => {
  return useMutation({
    mutationKey: ["update-product"],
    mutationFn: async (data) => {
      return await updateProduct(id, data);
    },
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ["delete-product"],
    mutationFn: async (id) => {
      return await deleteProduct(id);
    },
  });
};
