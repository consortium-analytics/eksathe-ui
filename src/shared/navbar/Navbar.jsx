import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotificationPanel from "../../components/notification-panel/NotificationPanel";
import MessagePanel from "../../components/message-panel/MessagePanel";

const Navbar = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  // Navigation data
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/new-ad", label: "New Ad" },
    { path: "/pricing", label: "Pricing" },
    { path: "/login", label: "Log in", isRightAligned: true },
  ];

  const additionalItems = [
    {
      label: "Notification",
      isOpen: isNotificationOpen,
      setIsOpen: setNotificationOpen,
    },
    {
      label: "Message",
      isOpen: isMessageOpen,
      setIsOpen: setMessageOpen,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left-aligned Logo */}
          <h1 className="text-xl font-light text-white">
            <a href="/" className="text-white font-bold">
              EKSATHE
            </a>
          </h1>

          {/* Centered Navigation Items */}
          <ul className="flex space-x-8 items-center text-white text-sm font-light">
            {navItems
              .filter((item) => !item.isRightAligned)
              .map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={`transition-all duration-200 ${
                      isActive(item.path)
                        ? "text-cyan-300 border-b-2 pb-1 border-cyan-400"
                        : "hover:text-gray-300"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

            {additionalItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => item.setIsOpen(!item.isOpen)}
                  className={`transition-all duration-200 ${
                    item.isOpen
                      ? "text-cyan-300 border-b-2 pb-1 border-cyan-400"
                      : "hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right-aligned Login */}
          <div>
            {navItems
              .filter((item) => item.isRightAligned)
              .map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-cyan-300 border-b-2 pb-1 border-cyan-400"
                      : "hover:text-gray-300 text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      </nav>

      {/* Notification & Message Panels */}
      <NotificationPanel isOpen={isNotificationOpen} onClose={() => setNotificationOpen(false)} />
      <MessagePanel isOpen={isMessageOpen} onClose={() => setMessageOpen(false)} />
    </>
  );
};

export default Navbar;
