import { NavLink } from "react-router-dom";

import { FaHome, FaFileAlt, FaRobot, FaTimes, FaCog } from "react-icons/fa";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Proposal",
      path: "/proposal",
      icon: <FaFileAlt />,
    },

    {
      name: "AI History",
      path: "/history",
      icon: <FaRobot />,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300

${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

lg:translate-x-0 lg:block`}
      >
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">AnalytIQ</h1>

          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800"
            >
              {link.icon}

              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
