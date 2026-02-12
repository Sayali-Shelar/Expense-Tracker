import { NavLink, Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-5">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Logo</h2>

        <nav className="space-y-2">
          <NavLink to="/" end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
              }`
            }>
            Dashboard
          </NavLink>

          <NavLink to="/team"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
              }`
            }>
            Team
          </NavLink>

          <NavLink to="/projects"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
              }`
            }>
            Projects
          </NavLink>

          <NavLink to="/calendar"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
              }`
            }>
            Calendar
          </NavLink>

          <NavLink to="/documents"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
              }`
            }>
            Documents
          </NavLink>

          <NavLink to="/reports"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md ${
                isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
              }`
            }>
            Reports
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Main
