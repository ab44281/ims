import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/dbConfig';
import sql from 'mssql';

// GET request to fetch all users
export async function GET(req: NextRequest) {
  try {
    const pool = await connectDB();
    const result = await pool.request().query('SELECT * FROM Users'); // Fetch all users

    return NextResponse.json({ users: result.recordset }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
