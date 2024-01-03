import { usePathnameAdmin } from "../utils/hooks";

export const Breadcumb = ({ list }) => {
  const { getPathname } = usePathnameAdmin();

  return (
    getPathname !== "/dashboard-admin" && (
      <nav className="flex w-fit items-center gap-2 py-2 px-7 mt-6">
        <ul className="flex items-center gap-2 text-xl font-semibold">
          <li className="text-[#807F7F]">Dashboard /</li>
          {list?.map((item, index) => (
            <li className="text-[#2284DF]" key={index}>
              {item?.name}
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};
