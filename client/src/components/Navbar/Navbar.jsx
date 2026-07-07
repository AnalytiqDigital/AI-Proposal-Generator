import { FaBars, FaBell, FaSearch } from "react-icons/fa";

export default function Navbar({ setSidebarOpen }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4 md:px-8">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-xl"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>

          <h2 className="font-bold text-xl">ProposalAI</h2>
        </div>

        <div className="hidden md:flex relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg w-72"
          />
        </div>

        <div className="flex items-center gap-5">
          <FaBell className="text-xl" />

          <img
            src="https://ui-avatars.com/api/?name=Emmanuel"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
