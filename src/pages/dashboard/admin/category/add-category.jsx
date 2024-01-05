import { FormProvider, useForm } from "react-hook-form";
import {
  ButtonLinkAdmin,
  Spinner,
  TextField,
  UploadDragField,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useCreateCategory } from "./hooks";

export const AddCategory = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const list = [
    {
      name: "Category",
    },
  ];

  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      category_name: "",
      category_description: "",
    },
  });

  const { mutate } = useCreateCategory();

  const { handleSubmit } = form;

  const onDrop = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      mutate(
        {
          ...data,
          image,
        },
        {
          onSuccess: () => {
            setIsLoading(false);
            Swal.fire({
              title: "Sukses Menambahkan Kategori",
              icon: "success",
              showConfirmButton: false,
            });

            navigate("/dashboard-admin/category");
          },
          onError: () => {
            setIsLoading(false);
            Swal.fire({
              title: "Gagal Menambahkan Kategori",
              icon: "error",
              showConfirmButton: false,
            });
          },
        }
      );
    } catch (error) {
      Promise.reject(error);
    }
  });

  useEffect(() => {
    const body = document.body;
    if (isLoading) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [isLoading]);

  return (
    <ContentAdminLayout
      title="Tambah Category"
      notRootTitleColor="text-black"
      titleStyle="text-3xl font-bold"
      list={list}>
      <FormProvider {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col border-2 gap-4 border-black mt-6 rounded-md p-5">
          <TextField
            name="category_name"
            label="Nama Kategori"
            placeholder="Masukan nama untuk kategori"
          />
          <TextField
            name="category_description"
            label="Deskripsi"
            isTextArea
            placeholder="Masukan Deskripsi untuk kategori"
          />
          <UploadDragField
            name="image"
            label="image"
            defaultImages={null}
            isSingle
            onChange={onDrop}
          />

          <div className="flex items-center justify-between">
            <ButtonLinkAdmin
              href="/dashboard-admin/category"
              backgroundColor="bg-[#B3B2B2]"
              textSize="text-lg">
              Batal
            </ButtonLinkAdmin>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center border-2 h-11 px-6 disabled:w-[8rem] disabled:cursor-wait rounded-xl text-lg bg-[#2284DF] text-white">
              {isLoading ? <Spinner width="w-5" height="h-5" /> : "Tambah"}
            </button>
          </div>
        </form>
      </FormProvider>
    </ContentAdminLayout>
  );
};
