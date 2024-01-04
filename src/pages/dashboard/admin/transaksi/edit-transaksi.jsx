import { FormProvider, useForm } from "react-hook-form";
import { ButtonLinkAdmin, Select, TextField } from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

export const EditTransaksi = () => {
  const { id } = useParams();

  console.log(id);

  const list = [
    {
      name: "Transaksi",
    },
  ];

  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      transaksi_datetime: "",
      transaksi_username: "",
      transaksi_status: "",
      transaksi_address: "",
      transaksi_information: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);

      Swal.fire({
        title: "Sukses Menyimpan Transaksi",
        icon: "success",
        showConfirmButton: false,
      });

      navigate("/dashboard-admin/transaksi");
    } catch (error) {
      Promise.reject(error);
    }
  });

  const status = [
    { value: "Pending", name: "Pending" },
    { value: "Success", name: "Success" },
    { value: "Failed", name: "Failed" },
  ];

  return (
    <ContentAdminLayout
      title="Edit transaksi"
      notRootTitleColor="text-black"
      titleStyle="text-3xl font-bold"
      list={list}>
      <FormProvider {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col border-2 gap-5 border-black mt-6 rounded-md p-5">
          <TextField
            name="transaksi_datetime"
            label="Date Time"
            placeholder="Masukan waktu transaksi"
          />
          <TextField
            name="transaksi_username"
            label="Username"
            placeholder="Masukan username transaksi"
          />
          <Select
            name="transaksi_status"
            label="Status"
            placeholder="Pilih status"
            options={status}
          />

          <div className="w-full h-full flex flex-col gap-2 overflow-auto">
            <h3 className="md:text-base text-sm font-semibold text-[#1B4242]">
              Produk
            </h3>
            <div className="w-full h-full flex flex-col border-2 border-black p-1 px-2">
              <table>
                <thead className="border-b border-black text-xl">
                  <tr>
                    <th className="p-2 text-left">No</th>
                    <th className="w-[30%]">Nama</th>
                    <th className="w-[25%]">Jumlah</th>
                    <th className="w-[20%]">Price</th>
                    <th className="w-[13%]">Total</th>
                  </tr>
                </thead>
                <tbody className="text-center font-bold">
                  <tr>
                    <td className="py-3 text-left pl-4">1</td>
                    <td>Darajat Pass</td>
                    <td>1</td>
                    <td>Rp. 100.000</td>
                    <td>Rp. 100.000</td>
                  </tr>
                  <tr>
                    <td className="py-6 text-left pl-4"></td>
                    <td></td>
                    <td></td>
                    <td className="border-t-2 border-black text-xl">
                      Total Pembayaran
                    </td>
                    <td className="border-t-2 border-black text-xl">
                      Rp. 100.000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <ButtonLinkAdmin
              href="/dashboard-admin/transaksi"
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
