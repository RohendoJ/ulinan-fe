import { atom } from "recoil";

export const sidebarMobile = atom({
  key: "sidebarMobile",
  default: false,
});

const path = window.location.pathname;
export const pathnameAdmin = atom({
  key: "pathname",
  default: path,
});

export const searchProduct = atom({
  key: "searchProduct",
  default: "",
});
