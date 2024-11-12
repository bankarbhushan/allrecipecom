import { NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo_recipe-removebg-preview.png";

const Header = () => {
  return (
    <div className="bg-slate-200 shadow-lg">
      {/* Main navigation container with maximum width, padding, and spacing */}
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo wrapped in a NavLink for navigation to the homepage */}
        <NavLink to="/">
          <img
            src={logo} // Logo image source
            alt="Logo"
            className="w-60 h-30 object-contain" // Sets image dimensions and object-fit
          />
        </NavLink>

        {/* Navigation links list */}
        <ul className="flex space-x-6">
          {/* Home link */}
          <li>
            <NavLink
              to="/" // Link to the home page
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-slate-600 font-semibold underline" // Active link style
                    : "text-slate-600 hover:text-orange-500" // Default style with hover effect
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
