import { jwtDecode } from "jwt-decode";

export const getToken = () => {
  if (!localStorage.getItem("access_token")) {
    return null;
  }
  return localStorage.getItem("access_token");
};

export const setToken = (token) => {
  if (!token) {
    return null;
  }
  localStorage.setItem("access_token", token);
};

export const removeToken = () => {
  if (!localStorage.getItem("access_token")) {
    return null;
  }
  localStorage.removeItem("access_token");
};

export const getUserRole = () => {
  const token = getToken();
  if (!token) {
    return null;
  }
  const decoded = jwtDecode(token);
  return decoded.role;
};
