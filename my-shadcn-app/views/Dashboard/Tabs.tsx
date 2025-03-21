"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Patients from "./Patients";

export default function TabsComponent() {
  return (
    <Tabs defaultValue="all" className="mx-4">
      <TabsList className="bg-transparent border-0 gap-4">
        <TabsTrigger
          value="all"
          className="
            px-4 py-4
            data-[state=active]:bg-[#14151A]
            data-[state=active]:text-white
          "
        >
          All Patients
        </TabsTrigger>

        <TabsTrigger
          value="critical"
          className="
            px-4 py-4
            data-[state=active]:bg-[#14151A]
            data-[state=active]:text-white
          "
        >
          Critical
        </TabsTrigger>

        <TabsTrigger
          value="stable"
          className="
            px-4 py-4
            data-[state=active]:bg-[#14151A]
            data-[state=active]:text-white
          "
        >
          Stable
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-4">
        <div className=" rounded-4xl border-b-indigo-200">
          <Patients />
        </div>
      </TabsContent>
      <TabsContent value="critical" className="mt-4">
        <p>Critical Patients content goes here...</p>
      </TabsContent>
      <TabsContent value="stable" className="mt-4">
        <p>Stable Patients content goes here...</p>
      </TabsContent>
    </Tabs>
  );
}
