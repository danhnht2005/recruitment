import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../components/layout/LayoutDefault"
import Company from "../pages/Company";
import CompanyDetail from "../pages/Company/CompanyDetail";
import Home from "../pages/Home";
import JobDetail from "../pages/JobDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
        path: "company/:id",
        element: <CompanyDetail />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "job/:id",
        element: <JobDetail />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        element: <PrivateRoutes />,
        children: [
        ]
      },
    ],
  },
]
