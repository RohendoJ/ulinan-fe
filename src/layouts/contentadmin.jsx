import { Fragment } from "react";
import { usePathnameAdmin } from "../utils/hooks";
import { Breadcumb } from "../components";

export const ContentAdminLayout = ({
  children,
  title,
  list,
  notRootTitleColor = "text-[#2284DF]",
  titleStyle = "text-4xl font-bold",
}) => {
  const { getPathname } = usePathnameAdmin();

  return (
    <Fragment>
      <Breadcumb list={list} />
      <section
        className={`w-full h-full flex py-6 mb-4 px-8 ${
          getPathname === "/dashboard-admin" ? "mt-8" : ""
        }`}>
        <div className="w-full h-full flex flex-col gap-2">
          <h1
            className={`${titleStyle} ${
              getPathname === "/dashboard-admin"
                ? "text-[#1A69B2]"
                : notRootTitleColor
            }`}>
            {title}
          </h1>
          {children}
        </div>
      </section>
    </Fragment>
  );
};
