"use client";
import HeaderBox from "@/components/HeaderBox";
import { Button } from "@/components/ui/button";
import { invoiceSummary, recentTransactions } from "@/constants/data";
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <section className="my-banks">
      <HeaderBox title='Dashboard' subtext='Manage your dashboard' />
      <h1>Welcome, {session.user?.name}</h1>
      <p>Role: {session.user?.role}</p>
      <Button className="form-btn" onClick={() => signOut()}>Sign Out</Button>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {invoiceSummary.map((card, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Invoice ID</th>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id} className="text-center">
                <td className="border p-2">{transaction.id}</td>
                <td className="border p-2">{transaction.customer}</td>
                <td className="border p-2">{transaction.amount}</td>
                <td className="border p-2">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
