import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import AuthComponents from "../components/auth-component/AuthComponents.jsx";
import JobFilter from "../pages/job-filter/JobFilter.jsx";
import JobAddForm from "../components/add-jobs/JobAddForm.jsx";
import AdForm from "../components/ad-form/AdForm.jsx";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import PricingTable from "../pages/price-table/PricingTable.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/new-ad",
        element: <AdForm />,
      },
      {
        path: "/login",
        element: <AuthComponents />,
      },
      {
        path: "/jobs",
        element: <JobFilter />,
      },
      {
        path: "/add-job",
        element: <JobAddForm />,
      },
      {
        path: "/pricing",
        element: <PricingTable />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
