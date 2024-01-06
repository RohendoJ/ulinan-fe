import { api } from "../../../../services/axios";

export const getAllTransactions = async (params) => {
  const { data } = await api.get("/api/transaction", {
    params,
  });
  return data;
};

export const getTransactionById = async (id) => {
  const { data } = await api.get(`/api/transaction/${id}`);
  return data;
};

export const updateTransaction = async (id, payload) => {
  const { data } = await api.patch(`/api/transaction/${id}`, payload);
  return data;
};

export const deleteTransaction = async (id) => {
  const { data } = await api.delete(`/api/transaction/${id}`);
  return data;
};
