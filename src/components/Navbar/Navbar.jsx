import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center bg-white shadow-md px-6 py-3">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/images/diy.png"
          alt="DIYMA logo"
          className="w-14 h-14 object-contain"
        />
        <p className="text-2xl font-bold text-gray-800">DIYMA</p>
      </Link>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-cyan-600" : "text-gray-700 hover:text-cyan-600"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-cyan-600" : "text-gray-700 hover:text-cyan-600"
            }`
          }
        >
          Project Ideas
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-cyan-600" : "text-gray-700 hover:text-cyan-600"
            }`
          }
        >
          Account
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
