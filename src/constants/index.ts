import { HiOutlineHome, HiOutlineDocumentDuplicate, HiOutlineUserGroup } from "react-icons/hi2";

// export const sidebarLinks = [
//     {
//       imgURL: "/icons/home.svg",
//       route: "/",
//       label: "Home",
//     },
//     {
//       imgURL: "/icons/dollar-circle.svg",
//       route: "/my-banks",
//       label: "My Banks",
//     },
//     {
//       imgURL: "/icons/transaction.svg",
//       route: "/transaction-history",
//       label: "Transaction History",
//     },
//     {
//       imgURL: "/icons/money-send.svg",
//       route: "/payment-transfer",
//       label: "Transfer Funds",
//     },
//   ];

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
    roles: ["Admin", "user"], // Accessible by both
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/users",
    label: "Users",
    roles: ["Admin", "User"], // Accessible by both
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
    roles: ["Admin", "User"], // Accessible by both
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
    roles: ["Admin", "User"], // Accessible by both
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
    roles: ["Admin","User"], // Only visible to regular users
  },
  {
    imgURL: "/icons/settings.svg",
    route: "/admin",
    label: "Admin Panel",
    roles: ["Admin"], // Only visible to admins
  },
];

  export const links = [
    { name: 'Home', href: '/dashboard', icon: HiOutlineHome },
    { name: 'Invoices', href: '/dashboard/invoices', icon: HiOutlineDocumentDuplicate },
    { name: 'Customers', href: '/dashboard/customers', icon: HiOutlineUserGroup },
  ];