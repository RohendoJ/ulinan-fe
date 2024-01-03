import { LimitSelect, Search, TableTransaksiAdmin } from "../../../components";
import { ContentAdminLayout } from "../../../layouts";

export const TransaksiAdmin = () => {
  const list = [
    {
      name: "Transaksi",
    },
  ];
  const dataTable = [
    {
      id: 1,
      date_time: "Nov 26, 2023 12:07 am",
      username: "endemic_mermaid_37",
      status: "Pending",
    },
    {
      id: 2,
      date_time: "Nov 26, 2023 12:07 am",
      username: "endemic_mermaid_37",
      status: "Failed",
    },
    {
      id: 3,
      date_time: "Nov 26, 2023 12:07 am",
      username: "endemic_mermaid_37",
      status: "Success",
    },
    {
      id: 4,
      date_time: "Nov 26, 2023 12:07 am",
      username: "endemic_mermaid_37",
      status: "Pending",
    },
    {
      id: 5,
      date_time: "Nov 26, 2023 12:07 am",
      username: "endemic_mermaid_37",
      status: "Success",
    },
  ];

  const limitData = [
    {
      value: 10,
      name: "10",
    },
    {
      value: 20,
      name: "20",
    },
    {
      value: 30,
      name: "30",
    },
  ];

  return (
    <ContentAdminLayout title="Transaksi" list={list}>
      <div className="flex items-center mt-5 justify-between">
        <LimitSelect options={limitData} />
        <Search />
      </div>
      <TableTransaksiAdmin data={dataTable} />
    </ContentAdminLayout>
  );
};
