import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/login";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]
