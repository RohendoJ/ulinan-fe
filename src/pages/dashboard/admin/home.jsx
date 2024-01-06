import { MdAttachMoney, MdCheck, MdShop, MdViewModule } from "react-icons/md";
import { CardAdmin } from "../../../components";
import { ContentAdminLayout } from "../../../layouts";
import { usePathnameAdmin } from "../../../utils/hooks";
import { useGetCardDashboard } from "./hooks";
import { useMemo } from "react";

export const HomeAdmin = () => {
  const { setPathname } = usePathnameAdmin();

  const { data } = useGetCardDashboard();

  const cardDashboard = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const cardValues = [
    {
      name: "Category",
      value: cardDashboard?.category_count || 0,
      icon: <MdViewModule />,
      link: "/dashboard-admin/category",
    },
    {
      name: "Product",
      value: cardDashboard?.product_count || 0,
      icon: <MdShop />,
      link: "/dashboard-admin/product",
    },
    {
      name: "Transaksi",
      value: cardDashboard?.order_count || 0,
      icon: <MdAttachMoney />,
      link: "/dashboard-admin/transaksi",
    },
    {
      name: "Success",
      value: cardDashboard?.payment_success_count || 0,
      icon: <MdCheck />,
      link: "/dashboard-admin/transaksi",
    },
  ];

  return (
    <ContentAdminLayout title="Welcome!">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start lg:grid-cols-2 w-full gap-y-16 py-8 lg:px-8">
        {cardValues.map((card, index) => (
          <CardAdmin
            key={index}
            {...card}
            onClick={() => setPathname(card.link)}
          />
        ))}
      </div>
    </ContentAdminLayout>
  );
};
