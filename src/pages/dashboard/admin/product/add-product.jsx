import { FormProvider, useForm } from "react-hook-form";
import {
  ButtonLinkAdmin,
  Select,
  Spinner,
  TextField,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useCreateProduct } from "./hooks";
import { useGetCategory } from "../category";
import { useEffect, useMemo, useState } from "react";

export const AddProduct = () => {
  const list = [
    {
      name: "Product",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const { data } = useGetCategory();

  const category = useMemo(() => {
    return data?.data?.map((item) => {
      return {
        value: item?.id,
        name: item?.name,
      };
    });
  }, [data?.data]);

  const { mutate } = useCreateProduct();

  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      product_name: "",
      product_price: "",
      product_category: "",
      product_address: "",
      product_information: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      mutate(
        {
          name: data?.product_name,
          price: Number(data?.product_price),
          category_id: Number(data?.product_category),
          address: data?.product_address,
          description: data?.product_information,
        },

        {
          onSuccess: () => {
            Swal.fire({
              title: "Sukses Menambahkan Product",
              icon: "success",
              showConfirmButton: false,
            });
            setIsLoading(false);
            navigate("/dashboard-admin/product");
          },
          onError: () => {
            setIsLoading(false);
            Swal.fire({
              title: "Gagal Menambahkan Product",
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
      title="Tambah Product"
      notRootTitleColor="text-black"
      titleStyle="text-3xl font-bold"
      list={list}>
      <FormProvider {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col border-2 gap-5 border-black mt-6 rounded-md p-5">
          <TextField
            name="product_name"
            label="Nama Product"
            placeholder="Masukan nama untuk product"
          />
          <TextField
            name="product_price"
            label="Harga"
            placeholder="Masukan harga (hanya angka)"
          />
          <Select
            name="product_category"
            label="Kategori"
            placeholder="Pilih kategori"
            options={category}
          />
          <TextField
            name="product_address"
            label="Alamat"
            placeholder="Masukan alamat produk"
          />
          <TextField
            name="product_information"
            label="Informasi"
            isTextArea
            placeholder="Masukan informasi untuk produk"
          />

          <div className="flex items-center justify-between">
            <ButtonLinkAdmin
              href="/dashboard-admin/product"
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
