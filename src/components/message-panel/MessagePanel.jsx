import { FaTimes } from "react-icons/fa";

const MessagePanel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Messages</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          <FaTimes size={20} />
        </button>
      </div>
      <div className="p-4 text-gray-700">
        <p>No new messages yet!</p>
      </div>
    </div>
  );
};

export default MessagePanel;
