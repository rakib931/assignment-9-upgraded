import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";
import CardDetels from "../Pages/CardDetels";
import ForgetPass from "../Pages/ForgetPass";
import Support from "../Components/Support";
import AboutUs from "../Components/AboutUs";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/carddetels/:id",
        element: <CardDetels />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/forgetPass",
        element: <ForgetPass />,
      },
    ],
  },
]);
