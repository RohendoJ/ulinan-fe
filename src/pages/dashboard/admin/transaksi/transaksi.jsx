import { useMemo, useState } from "react";
import {
  ButtonPaginate,
  LimitSelect,
  Search,
  TableTransaksiAdmin,
} from "../../../../components";
import { ContentAdminLayout } from "../../../../layouts";
import { useDeleteTransaction, useGetTransactions } from "./hooks";
import Swal from "sweetalert2";

export const TransaksiAdmin = () => {
  const list = [
    {
      name: "Transaksi",
    },
  ];

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(5);

  const { data, isLoading, refetch } = useGetTransactions({
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

  const { mutate } = useDeleteTransaction();

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
    <ContentAdminLayout title="Transaksi" list={list}>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 mt-5 justify-between">
        <LimitSelect
          options={limitData}
          onChange={(e) => setLimit(e.target.value)}
        />
        <Search onChange={search} />
      </div>
      <TableTransaksiAdmin
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
      <div className="w-full flex justify-center md:justify-end">
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
