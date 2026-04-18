import { Navigate } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../components/layout/LayoutDefault"
import Company from "../pages/Company";
import CompanyDetail from "../pages/Company/CompanyDetail";
import Home from "../pages/Home";
import JobDetail from "../pages/JobDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Logout from "../pages/logout";
import Dashboard from "../pages/Dashboard";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import InfoCompany from "../pages/InfoCompany";
import JobManage from "../pages/JobManage";
import CreateJob from "../pages/CreateJob";
import DetailJob from "../pages/JobManage/DetailJob";

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
        path: "logout",
        element: <Logout />,
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
        path: "*",
        element: <Navigate to="/" />,
      },

    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            path: "admin",
            element: <Dashboard />,
          },
          {
            path: "info-company",
            element: <InfoCompany />,
          },
          {
            path: "job-manage",
            element: <JobManage />,
          },
          {
            path: "create-job",
            element: <CreateJob />,
          },
          {
            path: "detail-job/:id",
            element: <DetailJob />,
          },
        ]
      },
    ]
  },
]
