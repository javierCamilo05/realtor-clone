import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center gap-4 container mx-auto flex-col py-4 sm:p-0 sm:flex-row">
        <Link to="/">
          <img
            className="h-6"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo realtor"
          />
        </Link>
        <nav className="flex flex-col items-center gap-4 md:gap-10 sm:flex-row text-xl">
          <Link
            className={`text-gray-800 hover:text-gray-600 hover:border-b-4 sm:py-4 hover:border-b-red-500 transition-colors ${
              pathname === "/" && "font-bold border-b-4 border-b-red-500"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`text-gray-800 hover:text-gray-600 hover:border-b-4 sm:py-4 hover:border-b-red-500 transition-colors ${
              pathname === "/offers" && "font-bold border-b-4 border-b-red-500"
            }`}
            to="offers"
          >
            Offers
          </Link>
          <Link
            className={`text-gray-800 hover:text-gray-600 hover:border-b-4 sm:py-4 hover:border-b-red-500 transition-colors ${
              pathname === "/sign-in" && "font-bold border-b-4 border-b-red-500"
            }`}
            to="sign-in"
          >
            Log In
          </Link>
          <Link
            className={`bg-red-500 py-1 px-3 rounded-2xl text-white hover:text-gray-600 transition-colors ${
              pathname === "/sign-in" && "font-bold border-b-4 border-b-red-500"
            }`}
            to="sign-up"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
