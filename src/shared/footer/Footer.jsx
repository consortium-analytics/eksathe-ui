const Footer = () => {
  return (
    <footer className="text-white mb-10">
      <div className="container border-t max-w-7xl mx-auto my-3 py-3 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left Section - Brand Name */}
        <h1 className="text-lg font-semibold"><a href="/">Eksathe</a></h1>
        
        {/* Middle Section - Links */}
        <ul className="flex space-x-6 my-4 md:my-0">
          <li>
            <a href="#" className="hover:text-gray-300 transition-all duration-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-all duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-all duration-200">
              Contact Us
            </a>
          </li>
        </ul>
        
        {/* Right Section - Copyright */}
        <p className="text-xs">&copy; 2025 Eksathe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;