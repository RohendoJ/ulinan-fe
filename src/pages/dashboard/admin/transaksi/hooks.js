import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
} from "./api";

export const useGetTransactions = (params) => {
  return useQuery({
    queryKey: ["transactions", params],
    queryFn: async () => await getAllTransactions(params),
  });
};

export const useGetTransactionById = (id) => {
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: async () => await getTransactionById(id),
  });
};

export const useUpdateTransaction = (id) => {
  return useMutation({
    mutationKey: ["update-transaction"],
    mutationFn: async (data) => {
      return await updateTransaction(id, data);
    },
  });
};

export const useDeleteTransaction = () => {
  return useMutation({
    mutationKey: ["delete-transaction"],
    mutationFn: async (id) => {
      return await deleteTransaction(id);
    },
  });
};
