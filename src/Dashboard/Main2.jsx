import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-md">
        <div className="p-4 text-xl font-bold border-b">
          TALLYGRAPHS
        </div>

        <div className="p-3 space-y-2">

          <NavLink to="/" end
            className="block px-4 py-2 rounded hover:bg-blue-100">
            Dashboard
          </NavLink>

          {/* Sales Dropdown */}
          <div>
            <button
              onClick={() => toggleMenu("sales")}
              className="w-full text-left px-4 py-2 hover:bg-blue-100 rounded">
              Sales
            </button>

            {openMenu === "sales" && (
              <div className="ml-6 mt-1 space-y-1">
                <NavLink to="/sales"
                  className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Sales Entry
                </NavLink>
              </div>
            )}
          </div>

          {/* Purchase Dropdown */}
          <div>
            <button
              onClick={() => toggleMenu("purchase")}
              className="w-full text-left px-4 py-2 hover:bg-blue-100 rounded">
              Purchase
            </button>

            {openMenu === "purchase" && (
              <div className="ml-6 mt-1 space-y-1">
                <NavLink to="/purchase"
                  className="block py-1 text-sm text-gray-600 hover:text-blue-600">
                  Purchase Entry
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/reports"
            className="block px-4 py-2 rounded hover:bg-blue-100">
            Reports
          </NavLink>

        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className="bg-white shadow p-4 font-semibold">
          Global Trading Corporation
        </div>

        {/* Page Content */}
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
