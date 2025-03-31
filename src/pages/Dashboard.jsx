import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import PulsemateBP from "../pages/PulsemateBP";
import Monitor from "../pages/Monitor";
import History from "../pages/History";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

function Dashboard() {
  // State to manage whether the welcome info is visible
  const [showInfo, setShowInfo] = useState(true);

  // Function to handle hiding the welcome section when a menu item is clicked
  const handleMenuClick = () => {
    setShowInfo(false); // Hide the welcome section when a menu item is clicked
  };

  return (
    <div className="dashboard">
      {/* Navbar Section */}
      <Navbar />

      {/* Dynamic Content Section */}
      <div className="content">
        <Routes>
          <Route index element={<Profile />} /> {/* Default Route for Dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="pulsemate-bp" element={<PulsemateBP />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="history" element={<History />} />
        </Routes>

      </div>

      {/* Menu Section */}
      <Menu onClick={handleMenuClick} />
    </div>
  );
}

export default Dashboard;
