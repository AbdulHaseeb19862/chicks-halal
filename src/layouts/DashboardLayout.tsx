import { Outlet } from "react-router-dom";
import AppSideBar from "../components/AppSideBar";
import DashNavbar from "../components/DashNavbar";
import { SidebarProvider } from "../components/ui/sidebar";

const defaultOpen = localStorage.getItem("sidebar_state") === "true";
const DashboardLayout = () => {
  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSideBar />
        <div className="w-full ">
          <DashNavbar />

          <Outlet />
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
