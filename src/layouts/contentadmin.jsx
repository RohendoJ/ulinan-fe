import { Fragment } from "react";
import { usePathnameAdmin } from "../utils/hooks";
import { Breadcumb } from "../components";

export const ContentAdminLayout = ({ children, title, list }) => {
  const { getPathname } = usePathnameAdmin();

  return (
    <Fragment>
      <Breadcumb list={list} />
      <section className="w-full h-full flex py-6 px-8">
        <div className="w-full h-full flex flex-col gap-2">
          <h1
            className={`text-4xl font-bold ${
              getPathname === "/dashboard-admin"
                ? "text-[#1A69B2]"
                : "text-[#2284DF]"
            }`}>
            {title}
          </h1>
          {children}
        </div>
      </section>
    </Fragment>
  );
};
