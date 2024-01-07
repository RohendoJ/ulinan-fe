import { FormProvider, useForm } from "react-hook-form";
import {
  ButtonLinkAdmin,
  Select,
  UploadDragField,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useAddGalleryProduct } from "./hooks";
import { useGetProducts } from "../product";

export const AddGallery = () => {
  const [image, setImage] = useState([]);

  const list = [
    {
      name: "Galeri",
    },
  ];

  const { data } = useGetProducts();

  const product = useMemo(() => {
    return data?.data?.map((item) => {
      return {
        value: item?.id,
        name: item?.name,
      };
    });
  }, [data?.data]);

  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      product: "",
    },
  });

  const { handleSubmit } = form;

  const onDrop = (e) => {
    setImage([
      ...image,
      {
        image: e.target.files[0],
      },
    ]);
  };

  const { mutate } = useAddGalleryProduct();

  const onSubmit = handleSubmit(async (data) => {
    try {
      image.map((item) => {
        mutate({
          image: item.image,
          product_id: Number(data.product),
        });
      });

      await Swal.fire({
        title: "Sukses Menambahkan Gallery",
        icon: "success",
        showConfirmButton: false,
      });

      navigate("/dashboard-admin/galeri");
    } catch (error) {
      await Swal.fire({
        title: "Gagal Menambahkan Gallery",
        icon: "error",
        showConfirmButton: false,
      });
      Promise.reject(error);
    }
  });

  return (
    <ContentAdminLayout
      title="Tambah Foto"
      notRootTitleColor="text-black"
      titleStyle="text-3xl font-bold"
      list={list}>
      <FormProvider {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col border-2 gap-4 border-black mt-6 rounded-md p-5">
          <Select
            name="product"
            label="Produk"
            placeholder="Pilih Produk"
            options={product}
          />

          <UploadDragField
            name="image"
            label="image"
            height="h-[25rem]"
            defaultImages={[]}
            onChange={onDrop}
          />

          <div className="flex items-center justify-between">
            <ButtonLinkAdmin
              href="/dashboard-admin/galeri"
              backgroundColor="bg-[#B3B2B2]"
              textSize="text-lg">
              Batal
            </ButtonLinkAdmin>
            <button
              type="submit"
              className="flex items-center justify-center border-2 h-11 px-6 disabled:w-[8rem] disabled:cursor-wait rounded-xl text-lg bg-[#2284DF] text-white">
              Tambah
            </button>
          </div>
        </form>
      </FormProvider>
    </ContentAdminLayout>
  );
};
