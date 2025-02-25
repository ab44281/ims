"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Form } from "./ui/form";
import CustomInput from "./CustomInput";
import { useRouter } from "next/navigation";
import { authFormSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form Submitted", data); // Debugging line to check form submission
    setIsLoading(true);

    // Make the NextAuth sign-in request
    const res = await signIn("credentials", {
      redirect: false, // Don't automatically redirect
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      console.error(res.error);
    } else {
      console.log("Sign-in successful:", res);
      router.push("/dashboard"); // Redirect after successful login
    }

    setIsLoading(false);
  };

  console.log("Form Errors: ", form.formState.errors); // Debug form errors

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt="Horizon Logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {type === "signIn" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {type === "signIn"
                ? "Please enter your details"
                : "Create a new account"}
            </p>
          </h1>
        </div>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                </>
              ) : type === "signIn" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "signIn"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link href={type === "signIn" ? "/signup" : "/signin"} className="form-link">
          {type === "signIn" ? "Sign up" : "Sign in"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
