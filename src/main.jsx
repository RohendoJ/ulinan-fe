import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryProvider, RecoilProvider } from "./providers";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </RecoilProvider>
  </React.StrictMode>
);
