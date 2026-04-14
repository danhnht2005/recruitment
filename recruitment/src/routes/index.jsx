import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../components/layout/LayoutDefault"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";

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
      {
        path: "search",
        element: <Search />,
      },
      {
        element: <PrivateRoutes />,
        children: [

        ]
      },
    ],
  },
]
