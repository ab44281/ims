import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the custom fields like id and role
      role: string;
      name: string;
      email: string;
      image?: string | null;
      $id?: string;
    userId?: string;
    firstName: string;
    lastName: string;
    dwollaCustomerUrl?: string;
    dwollaCustomerId?: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    dateOfBirth?: string;
    ssn?: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string | null;
  }

  interface JWT {
    id: string;
    role: string;
  }
}
