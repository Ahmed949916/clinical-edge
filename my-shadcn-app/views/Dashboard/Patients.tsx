"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { patients } from "./SidebarData";

export default function Patients() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critical":
        return "text-red-500";
      case "Stable":
        return "text-blue-500";
      case "Improving":
        return "text-green-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-300">
      <Table className="w-full border border-gray-300 text-sm rounded-xl overflow-hidden">
        <TableHeader className="bg-[#F7F7F8]">
          <TableRow className="border-b border-gray-300">
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Name
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Patient No
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Type
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Age
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Gender
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Status
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Ward
            </TableHead>
            <TableHead className="px-6 py-3 text-gray-600 font-medium">
              Last Updated
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {patients.map((patient, index) => (
            <TableRow
              key={index}
              className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
            >
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.name}
              </TableCell>
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.patientNo}
              </TableCell>
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.type}
              </TableCell>
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.age}
              </TableCell>
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.gender}
              </TableCell>
              <TableCell
                className={`px-6 py-3 font-medium ${getStatusColor(
                  patient.status
                )}`}
              >
                {patient.status}
              </TableCell>
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.ward}
              </TableCell>
              <TableCell className="px-6 py-3 text-gray-800">
                {patient.lastUpdated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
