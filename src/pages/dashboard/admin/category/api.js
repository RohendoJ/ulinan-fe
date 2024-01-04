import { api } from "../../../../services/axios";

export const getAllCategory = async (params) => {
  const { data } = await api.get("/api/category", {
    params,
  });
  return data;
};

export const getCategoryById = async (id) => {
  const { data } = await api.get(`/api/category/${id}`);
  return data;
};

export const createCategory = async (payload) => {
  const { data: res } = await api.post("/api/category", payload);
  return res;
};

export const updateCategory = async (id, payload) => {
  const { data } = await api.patch(`/api/category/${id}`, payload);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await api.delete(`/api/category/${id}`);
  return data;
};
