'use client'
import HeaderBox from '@/components/HeaderBox'
import DataTable from '@/components/Table';
import React, { useEffect, useState } from 'react'

interface User {
  ID: number;
  UserId: string;
  UserName: string;
  Email: string;
  Role: string;
// Add other fields as needed
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging log
        if (Array.isArray(data.users)) {
          setUsers(data.users); // Use data.users instead of data
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const userTableHeader = [
    { key: "UserId", label: "User ID" },
    { key: "UserName", label: "User Name" },
    { key: "Email", label: "Email" },
    { key: "Role", label: "Role" },
  ];
  
  

  if (loading) return <p className="text-center py-5 text-gray-600">Loading users...</p>;
  if (error) return <p className="text-center py-5 text-red-500">Error: {error}</p>;
  return (
    <section className='flex'>
        <div className='my-banks'>
            <HeaderBox title='Users' subtext='Manage users' />
            <div className='card'>
              <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2 text-blue-600">User List</h2>
              <DataTable columns={userTableHeader} data={users} />              
            </div>
        </div>
    </section>
  )
}

export default Users