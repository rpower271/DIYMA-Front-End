import { Link, NavLink } from "react-router";
import { useAuth } from "../Auth/AuthContext";

function Navbar() {
  const { logout, token } = useAuth();
  return (
    <header className="fixed top-0 left-0 w-full  shadow-md z-50 flex justify-between items-center  shadow-md px-6 py-3">
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
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Ideas"
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Project Ideas
        </NavLink>
        <NavLink
          to="/forum"
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          Forum
        </NavLink>
        {token ? (
          <>
            <NavLink
              to="/userPage"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Account
            </NavLink>
            <NavLink
              to="/"
              onClick={() => logout()}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
