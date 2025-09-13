import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const token = localStorage.getItem("token") || "eyzlsdihlsidlsknlknds_dsbdsbdvjsbv"
  return (
    <div>
      {/* Navbar */}
      <Navbar activeMenu={activeMenu} />

      {token && (
        <div className="flex">
          {/* SideMenu only visible on large screens */}
          <div className="hidden lg:block">
            <SideMenu activeMenu={activeMenu} />
          </div>

          {/* Content area always visible */}
          <div className="grow mx-4 sm:mx-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
