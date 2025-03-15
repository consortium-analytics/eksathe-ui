import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const NotificationPanel = ({ isOpen, onClose }) => {
  // Close the panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".notification-panel")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } notification-panel z-50`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500">
          <FaTimes size={18} />
        </button>
      </div>

      {/* Notifications List */}
      <div className="p-4 space-y-4">
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          🔔 You have a new message!
        </div>
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          📢 System update scheduled for tonight.
        </div>
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          🎉 Congrats! You unlocked a new badge.
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
