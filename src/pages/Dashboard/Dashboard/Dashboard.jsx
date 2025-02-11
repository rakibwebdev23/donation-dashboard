import { useState } from "react";
import { FaClipboardList, FaHome, FaPlus } from "react-icons/fa";
import { MdClose, MdLogout, MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div
                className={`lg:w-72 w-64 h-full bg-rose-500 text-white p-5 fixed top-0 left-0 z-20 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 flex flex-col`}
            >
                <div className="flex justify-between items-center mb-7">
                    <h3 className="text-2xl font-bold">Admin Dashboard</h3>
                    <button onClick={toggleSidebar} className="lg:hidden">
                        <MdClose size={24} />
                    </button>
                </div>
                
                <ul className="space-y-4 flex-grow">
                    <li>
                        <NavLink
                            to="/dashboard/adminHome"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded transition-all duration-300 ${isActive ? "bg-white text-[#18181B]" : "text-white hover:bg-gray-700"}`
                            }
                        >
                            <FaHome className="mr-3" size={20} /> Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addItems"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded transition-all duration-300 ${isActive ? "bg-white text-[#18181B]" : "text-white hover:bg-gray-700"}`
                            }
                        >
                            <FaPlus className="mr-3" size={20} /> Add Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/manageItems"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded transition-all duration-300 ${isActive ? "bg-white text-[#18181B]" : "text-white hover:bg-gray-700"}`
                            }
                        >
                            <FaClipboardList className="mr-3" size={20} /> Manage Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 lg:ml-72">
                {/* Header */}
                <header className="bg-rose-500 p-5 sticky top-0 z-10 shadow-md flex justify-between lg:justify-end items-center">
                    <button onClick={toggleSidebar} className="text-white lg:hidden block">
                        <MdMenu size={28} />
                    </button>
                    <button className="bg-white text-[#18181B] px-4 py-2 rounded flex items-center font-semibold hover:bg-gray-200 transition-all">
                        <MdLogout className="mr-2" size={20} /> Logout
                    </button>
                </header>
                
                {/* Page Content */}
                <div className="lg:p-10 p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
