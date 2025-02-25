import sql from "mssql";
// import dotenv from "dotenv";

// Load environment variables from .env file
// dotenv.config();

// Check if required environment variables are set
const requiredEnvVars = ['DB_USER', 'DB_PASSWORD', 'DB_SERVER', 'DB_DATABASE'];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

// SQL Server Configuration using environment variables
const dbConfig = {
  user: process.env.DB_USER as string,          // Type assertion to string
  password: process.env.DB_PASSWORD as string,  // Type assertion to string
  server: process.env.DB_SERVER as string,      // Type assertion to string
  database: process.env.DB_DATABASE as string,  // Type assertion to string
  options: {
    encrypt: false,                             // Set to true if using Azure SQL
    trustServerCertificate: true,               // Needed if self-signed certificate
  },
};

// Function to Connect to SQL Server
export async function connectDB() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Connected to SQL Server");
    return pool;
  } catch (error) {
    console.error("Database Connection Error:", error);
    throw error;
  }
}
