import { useMemo, useState } from "react";
import {
  ButtonLinkAdmin,
  ButtonPaginate,
  LimitSelect,
  Search,
  TableCategoryAdmin,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useDeleteCategory, useGetCategory } from "./hooks";
import Swal from "sweetalert2";

export const CategoryAdmin = () => {
  const list = [
    {
      name: "Category",
    },
  ];

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(5);

  const { data, isLoading, refetch } = useGetCategory({
    limit: limit,
    page: page,
    search: searchQuery,
  });

  const dataTable = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const meta = useMemo(() => {
    return data?.meta;
  }, [data?.meta]);

  const { mutate } = useDeleteCategory();

  const limitData = [
    {
      value: 5,
      name: "5",
    },
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

  const onNext = () => {
    if (meta?.next_page) {
      setPage(meta?.next_page);
    }
  };

  const onPrevious = () => {
    if (meta?.prev_page) {
      setPage(meta?.prev_page);
    }
  };

  const search = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  return (
    <ContentAdminLayout title="Category" list={list}>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 mt-5 lg:justify-between">
        <LimitSelect
          options={limitData}
          onChange={(e) => setLimit(e.target.value)}
        />
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <Search onChange={search} />
          <ButtonLinkAdmin href="/dashboard-admin/category/add" />
        </div>
      </div>
      <TableCategoryAdmin
        data={dataTable}
        isLoading={isLoading}
        currentPage={meta?.current_page}
        itemsPerPage={limit}
        onDelete={(id) => {
          mutate(id, {
            onSuccess: () => {
              refetch();
              Swal.fire({
                icon: "success",
                title: "Delete Success",
                showConfirmButton: false,
              });
            },
          });
        }}
      />
      <div className="w-full flex justify-end">
        <ButtonPaginate
          onFirst={() => setPage(1)}
          onLast={() => setPage(meta?.total_page)}
          onNext={onNext}
          onPrevious={onPrevious}
          onClickPage={(index) => setPage(index)}
          page={meta?.current_page}
          total={meta?.total_page}
        />
      </div>
    </ContentAdminLayout>
  );
};
