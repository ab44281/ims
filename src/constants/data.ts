// src/data/dashboardData.ts

export const invoiceSummary = [
    { title: "Pending Invoices", value: 15, icon: "/icons/pending.svg" },
    { title: "Collected Invoices", value: 30, icon: "/icons/collected.svg" },
    { title: "Total Invoices", value: 45, icon: "/icons/total.svg" },
    { title: "Outstanding Amount", value: "$5,000", icon: "/icons/outstanding.svg" }
  ];
  
  export const recentTransactions = [
    { id: "INV001", customer: "John Doe", amount: "$500", status: "Pending" },
    { id: "INV002", customer: "Jane Smith", amount: "$1,200", status: "Paid" },
    { id: "INV003", customer: "Alice Johnson", amount: "$900", status: "Overdue" },
    { id: "INV004", customer: "Bob Brown", amount: "$750", status: "Pending" },
    { id: "INV005", customer: "Charlie Wilson", amount: "$2,300", status: "Paid" }
  ];
  