import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import SwiperJs from "./Components/Others/SwiperJs";
import { router } from "./Routes/Root";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </StrictMode>
);
