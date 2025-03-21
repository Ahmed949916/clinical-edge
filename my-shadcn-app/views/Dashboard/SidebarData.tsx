import { Home, ClipboardList, Calendar, User } from "lucide-react";

export const sidebarItems = [
  { label: "Dashboard", icon: <Home size={20} /> },
  { label: "Patients", icon: <ClipboardList size={20} /> },
  { label: "Schedule", icon: <Calendar size={20} /> },
  { label: "Profile", icon: <User size={20} /> },
];

// data/patientsData.ts
export const patients = [
  {
    name: "John Doe",
    patientNo: "FGHJU5678K",
    type: "Trauma",
    age: 34,
    gender: "Male",
    status: "Critical",
    ward: "31,888",
    lastUpdated: "13/01/2020",
  },
  {
    name: "Michael Jones",
    patientNo: "LMNOP5678A",
    type: "Appendectomy recovery",
    age: 44,
    gender: "Female",
    status: "Stable",
    ward: "32,252",
    lastUpdated: "10/01/2020",
  },
  {
    name: "Sarah Williams",
    patientNo: "FQHLJ234Z",
    type: "Trauma",
    age: 64,
    gender: "Female",
    status: "Improving",
    ward: "29,890",
    lastUpdated: "13/01/2020",
  },
  {
    name: "Mia Taylor",
    patientNo: "ABCDEF789Y",
    type: "Appendectomy recovery",
    age: 65,
    gender: "Male",
    status: "Improving",
    ward: "27,473",
    lastUpdated: "16/01/2020",
  },
  {
    name: "Christopher White",
    patientNo: "LMNOP5678V",
    type: "Trauma",
    age: 76,
    gender: "Female",
    status: "Critical",
    ward: "26,362",
    lastUpdated: "24/01/2020",
  },
  {
    name: "Isabella Anderson",
    patientNo: "ZABCD6789T",
    type: "COPD exacerbation",
    age: 34,
    gender: "Male",
    status: "Stable",
    ward: "34,836",
    lastUpdated: "28/01/2020",
  },
  {
    name: "Mia Taylor",
    patientNo: "ABCDEF789Y",
    type: "Appendectomy recovery",
    age: 65,
    gender: "Male",
    status: "Improving",
    ward: "27,473",
    lastUpdated: "16/01/2020",
  },
  {
    name: "Christopher White",
    patientNo: "LMNOP5678V",
    type: "Trauma",
    age: 76,
    gender: "Female",
    status: "Critical",
    ward: "26,362",
    lastUpdated: "24/01/2020",
  },
  {
    name: "John Doe",
    patientNo: "FGHJU5678K",
    type: "Trauma",
    age: 34,
    gender: "Male",
    status: "Critical",
    ward: "31,888",
    lastUpdated: "13/01/2020",
  },
  {
    name: "Michael Jones",
    patientNo: "LMNOP5678A",
    type: "Appendectomy recovery",
    age: 44,
    gender: "Female",
    status: "Stable",
    ward: "32,252",
    lastUpdated: "10/01/2020",
  },
  {
    name: "Christopher White",
    patientNo: "LMNOP5678V",
    type: "Trauma",
    age: 76,
    gender: "Female",
    status: "Critical",
    ward: "26,362",
    lastUpdated: "24/01/2020",
  },
  {
    name: "Isabella Anderson",
    patientNo: "ZABCD6789T",
    type: "COPD exacerbation",
    age: 34,
    gender: "Male",
    status: "Stable",
    ward: "34,836",
    lastUpdated: "28/01/2020",
  },
];

export const tabsData = [
  {
    label: "All Patients",
    value: "all",
    content: "All Patients content goes here...",
  },
  {
    label: "Critical",
    value: "critical",
    content: "Critical Patients content goes here...",
  },
  {
    label: "Stable",
    value: "stable",
    content: "Stable Patients content goes here...",
  },
];
