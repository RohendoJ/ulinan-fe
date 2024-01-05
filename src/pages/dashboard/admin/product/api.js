import { api } from "../../../../services/axios";

export const getProducts = async (params) => {
  const { data } = await api.get("/api/product", {
    params,
  });
  return data;
};
export const createProduct = async (payload) => {
  const { data } = await api.post("/api/product", payload);
  return data;
};

export const getProductById = async (id) => {
  const { data } = await api.get(`/api/product/${id}`);
  return data;
};

export const updateProduct = async (id, payload) => {
  const { data } = await api.patch(`/api/product/${id}`, payload);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/api/product/${id}`);
  return data;
};
