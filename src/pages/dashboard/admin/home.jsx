import { MdAttachMoney, MdCheck, MdShop, MdViewModule } from "react-icons/md";
import { CardAdmin } from "../../../components";
import { ContentAdminLayout } from "../../../layouts";
import { usePathnameAdmin } from "../../../utils/hooks";

export const HomeAdmin = () => {
  const { setPathname } = usePathnameAdmin();
  const cardValues = [
    {
      name: "Category",
      value: 10,
      icon: <MdViewModule />,
      link: "/dashboard-admin/category",
    },
    {
      name: "Product",
      value: 10,
      icon: <MdShop />,
      link: "/dashboard-admin/product",
    },
    {
      name: "Transaksi",
      value: 10,
      icon: <MdAttachMoney />,
      link: "/dashboard-admin/transaksi",
    },
    {
      name: "Success",
      value: 10,
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
