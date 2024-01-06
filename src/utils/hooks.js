import { useRecoilState } from "recoil";
import { pathnameAdmin, searchProduct, sidebarMobile } from "./recoil";

export const useSidebarMobile = () => {
  const [get, set] = useRecoilState(sidebarMobile);
  return {
    setSidebarMobile: (val) => set(val),
    getSidebarMobile: get,
  };
};

export const usePathnameAdmin = () => {
  const [get, set] = useRecoilState(pathnameAdmin);
  return {
    setPathname: (val) => set(val),
    getPathname: get,
  };
};

export const useSearchProduct = () => {
  const [get, set] = useRecoilState(searchProduct);
  return {
    setSearch: (val) => set(val),
    getSearch: get,
  };
};
