import { FormProvider, useForm } from "react-hook-form";
import {
  ButtonLinkAdmin,
  Select,
  Spinner,
  TextField,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useGetTransactionById, useUpdateTransaction } from "./hooks";
import { useEffect, useMemo, useState } from "react";

export const EditTransaksi = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const list = [
    {
      name: "Transaksi",
    },
  ];

  const { data } = useGetTransactionById(id);

  const transaction = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const navigate = useNavigate();

  const form = useForm({
    mode: "all",
    defaultValues: {
      transaksi_datetime: "",
      transaksi_username: "",
      transaksi_status: "",
    },
  });

  const { handleSubmit, reset } = form;

  const { mutate } = useUpdateTransaction(id);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      mutate(
        {
          payment_status: data?.transaksi_status,
        },
        {
          onSuccess: () => {
            setIsLoading(false);
            Swal.fire({
              title: "Sukses Menyimpan Transaksi",
              icon: "success",
              showConfirmButton: false,
            });
            navigate("/dashboard-admin/transaksi");
          },
          onError: () => {
            setIsLoading(false);
            Swal.fire({
              title: "Gagal Menyimpan Transaksi",
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

  const status = [
    { value: "Pending", name: "Pending" },
    { value: "Success", name: "Success" },
    { value: "Failed", name: "Failed" },
  ];

  useEffect(() => {
    reset({
      transaksi_datetime: transaction?.created_at,
      transaksi_username: transaction?.username,
      transaksi_status: transaction?.payment_status,
    });
  }, [reset, transaction]);

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
            disabled
          />
          <TextField
            name="transaksi_username"
            label="Username"
            placeholder="Masukan username transaksi"
            disabled
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
                    <th className="w-[5%] py-2 px-4 text-left">No</th>
                    <th className="w-[30%] px-6">Nama</th>
                    <th className="w-[25%] px-6">Jumlah</th>
                    <th className="w-[20%] px-14 md:px-12">Price</th>
                    <th className="w-[13%] px-14 md:px-12">Total</th>
                  </tr>
                </thead>
                <tbody className="text-center font-bold">
                  <tr>
                    <td className="py-3 text-left pl-6">1</td>
                    <td>Darajat Pass</td>
                    <td>{transaction?.products.length}</td>
                    <td>
                      Rp. {transaction?.grand_total.toLocaleString("id-ID")}
                    </td>
                    <td>
                      Rp. {transaction?.grand_total.toLocaleString("id-ID")}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 text-left pl-4"></td>
                    <td></td>
                    <td></td>
                    <td className="border-t-2 border-black text-lg xl:text-xl">
                      Total Pembayaran
                    </td>
                    <td className="border-t-2 border-black text-lg xl:text-xl">
                      Rp. {transaction?.grand_total.toLocaleString("id-ID")}
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
              disabled={isLoading}
              className="flex items-center justify-center border-2 h-11 px-6 disabled:w-[8rem] disabled:cursor-wait rounded-xl text-lg bg-[#2284DF] text-white">
              {isLoading ? <Spinner width="w-5" height="h-5" /> : "Simpan"}
            </button>
          </div>
        </form>
      </FormProvider>
    </ContentAdminLayout>
  );
};
