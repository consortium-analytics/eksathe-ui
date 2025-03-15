import { Outlet } from "react-router";
import "./App.css";
import Footer from "./shared/footer/Footer";
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#362954]">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content area with flexible space */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
