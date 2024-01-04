import { FormProvider, useForm } from "react-hook-form";
import {
  ButtonLinkAdmin,
  Select,
  UploadDragField,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export const AddGallery = () => {
  const [image, setImage] = useState(null);

  const list = [
    {
      name: "Gallery",
    },
  ];

  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      gallery_name: "",
    },
  });

  const { handleSubmit } = form;

  const onDrop = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log({
        ...data,
        image,
      });

      Swal.fire({
        title: "Sukses Menambahkan Foto",
        icon: "success",
        showConfirmButton: false,
      });

      navigate("/dashboard-admin/galeri");
    } catch (error) {
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
            options={[{ value: "1", name: "Kategori 1" }]}
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
              href="/dashboard-admin/gallery"
              backgroundColor="bg-[#B3B2B2]"
              textSize="text-lg">
              Batal
            </ButtonLinkAdmin>
            <button
              type="submit"
              className="flex items-center justify-center border-2 h-11 px-6 rounded-xl text-lg bg-[#2284DF] text-white">
              Tambah
            </button>
          </div>
        </form>
      </FormProvider>
    </ContentAdminLayout>
  );
};
