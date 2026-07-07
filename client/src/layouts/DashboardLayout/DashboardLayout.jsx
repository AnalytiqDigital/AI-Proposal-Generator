import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

export default function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Mobile Sidebar Overlay */}

      {sidebarOpen && (

        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />

      )}

      {/* Sidebar */}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}

      <div className="lg:ml-64">

        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="p-4 md:p-8">

    <Outlet />

</main>

      </div>

    </div>

  );

}