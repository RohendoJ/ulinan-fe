import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addToCart,
  createOrder,
  getCart,
  getHistoryTransaction,
  getProductRecommendation,
} from "./api";

export const useAddToCart = () => {
  return useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: async (data) => {
      return await addToCart(data);
    },
  });
};

export const useGetCart = () => {
  return useQuery({
    queryKey: ["get-cart"],
    queryFn: async () => await getCart(),
  });
};

export const useGetHistoryTransaction = () => {
  return useQuery({
    queryKey: ["get-history-transaction"],
    queryFn: async () => await getHistoryTransaction(),
  });
};

export const useGetRecommendation = () => {
  return useQuery({
    queryKey: ["get-recommendation"],
    queryFn: async () => await getProductRecommendation(),
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationKey: ["create-order-single-product"],
    mutationFn: async (payload) => await createOrder(payload),
  });
};
