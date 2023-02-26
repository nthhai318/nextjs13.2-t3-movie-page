import { type Metadata } from "next";
import SignIn from "~/components/SignIn";

export default function Page() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-7 bg-black text-white">
      <h1 className="text-[2rem] font-bold">
        Hello, this is Home Page for App directory
      </h1>
      <SignIn />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to t3-app-directory",
};
