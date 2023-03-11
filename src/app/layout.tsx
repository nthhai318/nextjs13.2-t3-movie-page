import { type ReactNode } from "react";
import AuthProvider from "~/components/AuthProvider";
import ClientProvider from "~/utils/trpcClient";
import "../styles/globals.css";
import { cookies } from "next/headers";
import Nav from "~/components/Nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value || "dark";
  return (
    <ClientProvider>
      <AuthProvider>
        <html lang="en" className={theme == "dark" ? "dark" : undefined}>
          <body className="bg-backgroundneutral text-primary duration-500">
            <Nav />
            {children}
          </body>
        </html>
      </AuthProvider>
    </ClientProvider>
  );
}
