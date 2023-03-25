import { cookies } from "next/headers";
import Link from "next/link";
import SignIn from "./SignIn";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value || "dark";

  return (
    <div className="flex items-center justify-center gap-7 ">
      <SignIn />
      <ThemeToggle theme={theme} />
      <Link href="/dynamic">
        <button className="rounded-md p-2 hover:underline">Testing SSR</button>
      </Link>
    </div>
  );
}
