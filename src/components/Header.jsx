import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-center gap-5 text-2xl">
        <a href="/">Home</a>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        |
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        |
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        |
        <NavLink
          to="/dashboard2"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard2
        </NavLink>
      </div>
      <hr className="my-5" />
    </>
  );
};

export default Header;
