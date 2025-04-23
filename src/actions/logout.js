// app/actions/logout.js
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  cookies().delete("token");
  cookies().delete("photoURL");
  redirect("/"); // Will redirect on the server side after logout
}
