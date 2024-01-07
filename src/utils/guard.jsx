import { jwtDecode } from "jwt-decode";
import { getToken, removeToken } from "./token";
import { Navigate } from "react-router-dom";

export const AdminProtected = ({ children }) => {
  const token = getToken();

  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.role !== "admin") {
      return <Navigate to="/" />;
    }
    return children;
  }

  return <Navigate to="/" />;
};

export const Protected = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  const decoded = jwtDecode(token);

  if (Date.now() > decoded.exp * 1000) {
    removeToken();
    return <Navigate to="/" />;
  }
  return children;
};

export const UserProtected = ({ children }) => {
  const token = getToken();

  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.role !== "user") {
      return <Navigate to="/dashboard-admin" />;
    }
    return children;
  }

  return children;
};
