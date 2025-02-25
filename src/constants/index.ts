import { HiOutlineHome, HiOutlineDocumentDuplicate, HiOutlineUserGroup } from "react-icons/hi2";

export const sidebarLinks = [
    {
      imgURL: "/icons/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/icons/dollar-circle.svg",
      route: "/my-banks",
      label: "My Banks",
    },
    {
      imgURL: "/icons/transaction.svg",
      route: "/transaction-history",
      label: "Transaction History",
    },
    {
      imgURL: "/icons/money-send.svg",
      route: "/payment-transfer",
      label: "Transfer Funds",
    },
  ];

  export const links = [
    { name: 'Home', href: '/dashboard', icon: HiOutlineHome },
    { name: 'Invoices', href: '/dashboard/invoices', icon: HiOutlineDocumentDuplicate },
    { name: 'Customers', href: '/dashboard/customers', icon: HiOutlineUserGroup },
  ];