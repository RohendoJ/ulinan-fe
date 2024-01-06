import { api } from "../../../services/axios";

export const addToCart = async (data) => {
  const { data: response } = await api.post("/api/cart", data);
  return response;
};

export const getCart = async () => {
  const { data } = await api.get("/api/cart");
  return data;
};

export const getHistoryTransaction = async () => {
  const { data } = await api.get("/api/order/user");
  return data;
};

export const getProductRecommendation = async () => {
  const { data } = await api.get("/api/product/random");
  return data;
};

export const createOrder = async (payload) => {
  const { data } = await api.post("/api/order", payload);
  return data;
};
