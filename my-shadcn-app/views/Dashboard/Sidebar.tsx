"use client";

import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logo from "../../assests/logo.png";
import { sidebarItems } from "./SidebarData";
import Image from "next/image";
import { LogOut } from "lucide-react";

export default function SidebarComponent() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="flex min-h-screen h-full ">
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        className="my-3 mx-1 flex flex-col h-full justify-between mt-[-2px]"
      >
        <div className="h-full">
          <div className="mt-6">
            <SidebarHeader className="mb-6 flex-row items-center gap-2">
              <Image src={logo} alt="logo" className="w-8 h-8" />
              <h2 className="text-lg font-bold">Clinical Edge</h2>
            </SidebarHeader>
          </div>

          <SidebarContent>
            <SidebarMenu>
              {sidebarItems.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <SidebarMenuItem key={index}>
                    <button
                      className={`w-full flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-150 hover:bg-blue-50 hover:text-gray-700 focus:outline-none cursor-pointer ${
                        isActive ? "bg-blue-50 text-gray-700 rounded-2xl" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <span className="text-gray-400">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </div>

        <div className="py-8">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-blue-50 hover:text-gray-700 transition cursor-pointer">
            <LogOut className="w-5 h-full max-h-full text-gray-400" />
            <span>Log Out</span>
          </button>
        </div>
      </Sidebar>
    </div>
  );
}
