import React from "react";
import SidebarComponent from "./Sidebar";
import TabsComponent from "./Tabs";
import Header from "../Header";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <SidebarComponent />
        <div className="w-full flex-col ">
          <Header />
          <TabsComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
