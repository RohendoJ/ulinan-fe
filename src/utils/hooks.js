import { useRecoilState } from "recoil";
import { pathnameAdmin, sidebarMobile } from "./recoil";

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
