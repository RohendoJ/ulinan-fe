import { api } from "../../../../services/axios";

export const addGalleryProduct = async (payload) => {
  const { data } = await api.post("/api/product/image", payload);
  return data;
};

export const deleteImageProduct = async (productId, imageId) => {
  const { data } = await api.delete(
    `/api/product/${productId}/image/${imageId}`
  );
  return data;
};
