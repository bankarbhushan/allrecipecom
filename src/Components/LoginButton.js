import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={
        ({ isActive }) =>
          isActive
            ? "text-slate-600 font-semibold underline un" // Active link style
            : "text-slate-600 hover:text-orange-500" // Default style with hover effect
      }
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
