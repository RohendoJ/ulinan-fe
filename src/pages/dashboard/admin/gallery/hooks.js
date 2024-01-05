import { useMutation } from "@tanstack/react-query";
import { addGalleryProduct, deleteImageProduct } from "./api";

export const useAddGalleryProduct = () => {
  return useMutation({
    mutationKey: ["add-gallery-product"],
    mutationFn: async (data) => {
      const formData = new FormData();
      formData.append("image", data.image);
      formData.append("product_id", data.product_id);

      return await addGalleryProduct(formData);
    },
  });
};

export const useDeleteImageProduct = (productId) => {
  return useMutation({
    mutationKey: ["delete-image-product", productId],
    mutationFn: async (imageId) => {
      return await deleteImageProduct(productId, imageId);
    },
  });
};
