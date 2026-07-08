import {
    FaBars,
    FaBell
} from "react-icons/fa";

export default function Navbar({
    setSidebarOpen
}) {

    return (

        <header

            className="sticky top-0 z-20 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center"

        >

            <div className="flex items-center gap-4">

                <button

                    className="lg:hidden"

                    onClick={() => setSidebarOpen(true)}

                >

                    <FaBars size={22} />

                </button>

                <h2 className="text-xl font-semibold">

                    ProposalAI

                </h2>

            </div>

            <div className="flex items-center gap-5">

                <FaBell
                    className="text-xl cursor-pointer"
                />

                <div

                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"

                >

                    EM

                </div>

            </div>

        </header>

    );
}