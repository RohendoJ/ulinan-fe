import { useMemo, useState } from "react";
import {
  ButtonLinkAdmin,
  ButtonPaginate,
  LimitSelect,
  Search,
  TableGalleryAdmin,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useDeleteProduct, useGetProducts } from "../product";
import Swal from "sweetalert2";

export const GalleryAdmin = () => {
  const list = [
    {
      name: "Galeri",
    },
  ];

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(5);

  const { data, isLoading, refetch } = useGetProducts({
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

  const { mutate } = useDeleteProduct();

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
    <ContentAdminLayout title="Galeri" list={list}>
      <div className="flex items-center mt-5 justify-between">
        <LimitSelect
          options={limitData}
          onChange={(e) => setLimit(e.target.value)}
        />
        <div className="flex items-center gap-6">
          <Search onChange={search} />
          <ButtonLinkAdmin href="/dashboard-admin/galeri/add" />
        </div>
      </div>
      <TableGalleryAdmin
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
