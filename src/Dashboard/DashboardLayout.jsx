import React, { useState } from "react";
import Sidebar from "./Sidebar";
import IncomeDashboard from "./IncomeDashboard";
import ExpenseDashboard from "./ExpenseDashboard";
import OverviewDashboard from "./OverviewDashboard";

const DashboardLayout = () => {
  const [activePage, setActivePage] = useState("overview");
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const renderContent = () => {
    switch (activePage) {
      case "overview":
        return <OverviewDashboard />;
      case "income":
        return <IncomeDashboard />;
      case "expense":
        return <ExpenseDashboard />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        setActivePage={setActivePage}
        activePage={activePage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        user={user}
      />

      <div className="flex-1 flex flex-col">
        {/* Mobile Navbar */}
        <div className="md:hidden p-4 bg-white shadow">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            ☰ Menu
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
