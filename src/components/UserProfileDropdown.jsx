import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem('token');
    navigate("/");
  };

  const menuItems = [
    {
      name: "Profile Details",
      path: "/profile",
      icon: <User className="w-4 h-4 mr-2" />,
      action: () => navigate("/profile"),
    },
    {
      name: "Security Settings",
      path: "/settings",
      icon: <Settings className="w-4 h-4 mr-2" />,
      action: () => navigate("/settings"),
    },
    {
      name: "Logout",
      path: "/",
      icon: <LogOut className="w-4 h-4 mr-2" />,
      action: handleLogout,
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <img
          className="h-9 w-9 rounded-full object-cover ring-2 ring-gray-200"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User profile"
        />
        <span className="hidden md:inline">admin</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-60 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 py-1 z-50 transform origin-top-right scale-95 animate-slide-in">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-900">admin</p>
            <p className="text-xs text-gray-500 truncate mt-1">admin@metacore.com</p>
          </div>
          <div className="py-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 text-left"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
