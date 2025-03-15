import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Analytics", icon: <FaChartBar /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Logout", icon: <FaSignOutAlt />, style: "text-red-500" },
  ];

  return (
    <div className="flex h-screen bg-base-200">
      {/* Sidebar */}
      <div
        className={`bg-base-300 p-5 ${isOpen ? "w-64" : "w-20"} transition-all`}
      >
        <button
          className="btn btn-ghost mb-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        <ul className="menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center gap-3 p-2 rounded-lg w-full text-left hover:bg-primary hover:text-white transition-all ${
                  activeTab === item.name ? "bg-primary text-white" : ""
                } ${item.style || ""}`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.icon} {isOpen && item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">{activeTab}</h1>
        <div className="mt-4 bg-white p-5 rounded-lg shadow">
          {activeTab === "Dashboard" && (
            <p>📊 Welcome to the Admin Dashboard!</p>
          )}
          {activeTab === "Users" && <p>👥 Manage your users here.</p>}
          {activeTab === "Analytics" && <p>📈 View reports and insights.</p>}
          {activeTab === "Settings" && <p>⚙️ Adjust your preferences.</p>}
          {activeTab === "Logout" && <p>🔓 You have been logged out.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
