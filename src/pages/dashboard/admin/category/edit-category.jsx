import { FormProvider, useForm } from "react-hook-form";
import {
  ButtonLinkAdmin,
  TextField,
  UploadDragField,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useGetCategoryById, useUpdateCategory } from "./hooks";
import { useParams } from "react-router-dom";

export const EditCategory = () => {
  const list = [
    {
      name: "Category",
    },
  ];
  const { id } = useParams();

  const { data } = useGetCategoryById(id);
  const { mutate } = useUpdateCategory(id);

  const category = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const [image, setImage] = useState(category?.image || null);
  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      category_name: "",
      category_description: "",
    },
  });

  const { handleSubmit, reset } = form;

  const onDrop = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      mutate({
        ...data,
        image,
      });

      await Swal.fire({
        title: "Sukses Menyimpan Kategori",
        icon: "success",
        showConfirmButton: false,
      });

      navigate("/dashboard-admin/category");
    } catch (error) {
      Promise.reject(error);
    }
  });

  useEffect(() => {
    reset({
      category_name: category?.name,
      category_description: category?.description,
    });
    setImage(category?.image);
  }, [category, reset]);

  return (
    <ContentAdminLayout
      title="Edit Category"
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
            onChange={onDrop}
            isCategory
            defaultImages={image}
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
              className="flex items-center justify-center border-2 h-11 px-6 rounded-xl text-lg bg-[#2284DF] text-white">
              Simpan
            </button>
          </div>
        </form>
      </FormProvider>
    </ContentAdminLayout>
  );
};
