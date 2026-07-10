import {
    FaHome,
    FaFileAlt,
    FaFileInvoice,
    FaBuilding,
    FaClipboardList,
    FaRobot,
    FaCog,
    FaTimes
} from "react-icons/fa";

const menu = [
    {
        name: "Dashboard",
        icon: <FaHome />
    },
    {
        name: "Proposals",
        icon: <FaFileAlt />
    },
    {
        name: "Quotations",
        icon: <FaClipboardList />
    },
    {
        name: "Invoices",
        icon: <FaFileInvoice />
    },
    {
        name: "Company Profile",
        icon: <FaBuilding />
    },
    {
        name: "AI History",
        icon: <FaRobot />
    },
    {
        name: "Settings",
        icon: <FaCog />
    }
];

export default function Sidebar({
    sidebarOpen,
    setSidebarOpen
}) {

    return (

        <>

            {/* Overlay */}

            {
                sidebarOpen && (

                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-black/40 z-30 lg:hidden"
                    />

                )
            }

            <aside

                className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-40 transform transition-transform duration-300

                ${sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

                lg:translate-x-0`}

            >

                <div className="flex justify-between items-center p-6 border-b border-slate-700">

                    <h1 className="text-2xl font-bold">

                        AnalytIQ

                    </h1>

                    <button

                        className="lg:hidden"

                        onClick={() => setSidebarOpen(false)}

                    >

                        <FaTimes size={22} />

                    </button>

                </div>

                <nav className="mt-6">

                    {

                        menu.map((item) => (

                            <button

                                key={item.name}

                                className="w-full flex items-center gap-4 px-6 py-4 hover:bg-slate-800 transition"

                            >

                                {item.icon}

                                {item.name}

                            </button>

                        ))

                    }

                </nav>

            </aside>

        </>

    );
}