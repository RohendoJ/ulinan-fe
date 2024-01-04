import {
  ButtonLinkAdmin,
  ButtonPaginate,
  LimitSelect,
  Search,
  TableCategoryAdmin,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";

export const CategoryAdmin = () => {
  const list = [
    {
      name: "Category",
    },
  ];

  const dataTable = [
    {
      id: 1,
      name: "Paket Event",
      description: "Paket event terdiridari beberapa",
    },
    {
      id: 2,
      name: "Wisata",
      description: "Wisata-wisata yang ada di daerah garut",
    },
    {
      id: 3,
      name: "Event",
      description: "Acara yang menarik dan seru untuk dihadiri",
    },
    {
      id: 4,
      name: "Foods",
      description: "Makanan tradisional dari berbagai daerah",
    },
    {
      id: 5,
      name: "Entertaiment",
      description: "tempat-tempat Bermedia yang sangat seru",
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
    <ContentAdminLayout title="Category" list={list}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 mt-5 lg:justify-between">
        <LimitSelect options={limitData} />
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <Search />
          <ButtonLinkAdmin href="/dashboard-admin/category/add" />
        </div>
      </div>
      <TableCategoryAdmin data={dataTable} />
      <div className="w-full flex justify-end">
        <ButtonPaginate
          next="https://google.com"
          previous="https://google.com"
          page={1}
          total={10}
        />
      </div>
    </ContentAdminLayout>
  );
};
