import { MenuIcon, Share2, Wallet, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import logo from "../assets/metacore.png";
import UserProfileDropdown from "./UserProfileDropdown"; 
const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center justify-between gap-5 bg-white/70 border-b border-gray-200/50 backdrop-blur-md px-4 py-4 sm:px-7 sticky top-0 z-30">
      {/* Left side - menu button and title */}
      <div className="flex items-center gap-5">
        <button
          className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <X className="text-2xl" />
          ) : (
            <MenuIcon className="text-2xl" />
          )}
        </button>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Metacore logo" className="w-10 h-10" />
          <span className="text-lg font-medium text-black truncate">
            Metacore Analysis
          </span>
        </div>
      </div>

      {/* Right side - User Profile Dropdown */}
      <div className="flex items-center gap-4 mr-3">
        <UserProfileDropdown /> {/* Use the imported component here */}
      </div>

      {/* Mobile side menu */}
      {openSideMenu && (
        <div
          className="fixed top-[73px] left-0 right-0 
                     bg-white/70 backdrop-blur-md 
                     border-b border-gray-200 
                     lg:hidden z-20"
        >
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;