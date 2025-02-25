import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // If user is not authenticated, redirect to sign-in page
    redirect("/signin");
  }
    // const loggedIn = await getLoggedInUser();
    const loggedIn = {
        $id: "1",
        email: "john.doe@example.com",
        userId: "1001",
        dwollaCustomerUrl: "https://api-sandbox.dwolla.com/customers/1001",
        dwollaCustomerId: "1001",
        firstName: "John",
        lastName: "Doe",
        name: "John Doe",
        address1: "123 Main St",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        dateOfBirth: "1990-05-15",
        ssn: "123-45-6789",
      };
    return (
        <main className="flex h-screen w-full font-inter">
      <Sidebar user={session.user} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* <MobileNav user={loggedIn} /> */}
          </div>
        </div>
        {children}
      </div>
    </main>
      );
}
