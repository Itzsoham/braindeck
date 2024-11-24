import { Outlet } from "@tanstack/react-router";
import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

export const Root = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex w-full flex-col h-screen">
        {/* <Topbar /> */}
        <div className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
