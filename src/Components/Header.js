import { NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo_recipe-removebg-preview.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="bg-slate-200 shadow-lg ">
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
        <ul className="flex space-x-6 flex-col justify-between items-end md:flex-row  ">
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
          <li>
            <NavLink
              to="/about" // Link to the home page
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-slate-600 font-semibold underline" // Active link style
                    : "text-slate-600 hover:text-orange-500" // Default style with hover effect
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contactus" // Link to the home page
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-slate-600 font-semibold underline" // Active link style
                    : "text-slate-600 hover:text-orange-500" // Default style with hover effect
              }
            >
              ContactUs
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li>
              <LogoutButton />
            </li>
          ) : (
            <li>
              <LoginButton />
            </li>
          )}
          <li>
            {isAuthenticated && (
              <div className="flex gap-2">
                <img
                  src={user.picture}
                  width={30}
                  className="rounded-full "
                  alt={user.name}
                />
                <p>{user.email}</p>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
