import { type Metadata } from "next";
import SignIn from "~/components/SignIn";
import ThemeToggle from "~/components/ThemeToggle";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Page() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value || "dark";

  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-7 ">
      <h1 className="text-[2rem] font-bold">
        Hello, this is Home Page for App directory
      </h1>
      <SignIn />
      <ThemeToggle theme={theme} />
      <Link href="/dynamic">
        <button className="w-[20rem] rounded-md bg-hightlight p-2">
          {" "}
          Testing Server side rendering
        </button>
      </Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to t3-app-directory",
};
