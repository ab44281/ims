"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>Role: {session.user?.role}</p>
      <Button className="form-btn" onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default Dashboard;
