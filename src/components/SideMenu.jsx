import { User } from "lucide-react";
import { SIDE_MENU_DATA } from "../assets/data";
import { useNavigate } from "react-router-dom";
import logo from "../assets/metacore.png";

const SideMenu = ({ activeMenu }) => {
  const navigate = useNavigate();
  const user = {
    fullName: localStorage.getItem("fullName"),
    imageUrl: localStorage.getItem("imageUrl"),
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20 overflow-y-auto">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="Profile image"
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <img src={logo} alt="Metacore logo" className="w-20 h-20" />
        )}

      </div>

      <nav className="space-y-2">
        {SIDE_MENU_DATA.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={`menu_${index}`}
              className={`w-full flex items-center gap-4 text-[15px] py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer 
                ${activeMenu === item.label
                  ? "bg-purple-500 text-white font-medium shadow-md hover:bg-purple-600"
                  : "hover:bg-gray-100 text-gray-700"
                }`
              }
              onClick={() => navigate(item.path)}
            >
              <IconComponent className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SideMenu;