import {
  ButtonLinkAdmin,
  LimitSelect,
  Search,
  TableProductAdmin,
} from "../../../components";
import { ContentAdminLayout } from "../../../layouts";

export const ProductAdmin = () => {
  const list = [
    {
      name: "Product",
    },
  ];
  const dataTable = [
    {
      id: 1,
      name: "Darajat pas",
      price: 10000,
      category: "Wisata",
    },
    {
      id: 2,
      name: "Sayang helang",
      price: 10000,
      category: "Wisata",
    },
    {
      id: 3,
      name: "Talaga Bodas",
      price: 10000,
      category: "Wisata",
    },
    {
      id: 4,
      name: "Papandayan",
      price: 10000,
      category: "Entertainment",
    },
    {
      id: 5,
      name: "Gunung Putri",
      price: 10000,
      category: "Paket Event",
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
    <ContentAdminLayout title="Product" list={list}>
      <div className="flex items-center mt-5 justify-between">
        <LimitSelect options={limitData} />
        <div className="flex items-center gap-6">
          <Search />
          <ButtonLinkAdmin href="/dashboard-admin/product/add" />
        </div>
      </div>
      <TableProductAdmin data={dataTable} />
    </ContentAdminLayout>
  );
};
