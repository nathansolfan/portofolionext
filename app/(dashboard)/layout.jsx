// app/dashboard/layout.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    console.log("Redirecting to login");
    redirect("/login");
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
