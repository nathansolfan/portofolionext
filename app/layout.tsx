// app/layout.tsx

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar component
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    // when user is in the dashboard, but not logged in, Sends it to /login
    redirect("/");
  }
  return (
    <>
      <Navbar user={data.session.user} /> {/* Include the Navbar here */}
      {children}
    </>
  );
}
// if no redirect, data.session may have an issue
