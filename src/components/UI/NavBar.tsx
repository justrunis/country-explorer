import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaGlobe,
  FaBook,
  FaBars,
  FaTimes,
  FaCoins,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-300 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        <ul className="hidden md:flex space-x-6">
          <NavItem to="/" icon={<FaHome />} label="Home" />
          <NavItem to="/country" icon={<FaGlobe />} label="Country" />
          <NavItem to="/dictionary" icon={<FaBook />} label="Dictionary" />
          <NavItem to="/crypto" icon={<FaCoins />} label="Crypto" />
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-primary text-white py-2">
          <ul className="flex flex-col items-center space-y-4">
            <NavItem to="/" icon={<FaHome />} label="Home" />
            <NavItem to="/country" icon={<FaGlobe />} label="Country" />
            <NavItem to="/dictionary" icon={<FaBook />} label="Dictionary" />
            <NavItem to="/crypto" icon={<FaCoins />} label="Crypto" />
          </ul>
        </div>
      )}
    </header>
  );
};

const NavItem: React.FC<{
  to: string;
  label: string;
  icon?: React.ReactNode;
}> = ({ to, label, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 text-lg ${
        isActive ? "text-black font-bold" : "text-white hover:text-blue-100"
      }`
    }
  >
    {icon} {label}
  </NavLink>
);

export default NavBar;
