import { FormProvider, useForm } from "react-hook-form";
import { ButtonLinkAdmin, Select, TextField } from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

export const EditProduct = () => {
  const { id } = useParams();

  console.log(id);

  const list = [
    {
      name: "Product",
    },
  ];

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
      console.log(data);

      Swal.fire({
        title: "Sukses Menyimpan Product",
        icon: "success",
        showConfirmButton: false,
      });

      navigate("/dashboard-admin/product");
    } catch (error) {
      Promise.reject(error);
    }
  });

  return (
    <ContentAdminLayout
      title="Edit Product"
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
            options={[{ value: "1", name: "Kategori 1" }]}
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
              className="flex items-center justify-center border-2 h-11 px-6 rounded-xl text-lg bg-[#2284DF] text-white">
              Simpan
            </button>
          </div>
        </form>
      </FormProvider>
    </ContentAdminLayout>
  );
};
