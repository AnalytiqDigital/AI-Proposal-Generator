import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Dashboard from "@/pages/Dashboard/Dashboard";

import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<AuthLayout />}>

          <Route path="/" element={<Login />} />

          <Route
            path="/register"
            element={<Register />}
          />

        </Route>

        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}