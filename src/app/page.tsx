import { type Metadata } from "next";

export default function Page() {
  return <h1>Hello, this is Home Page for App directory</h1>;
}

export const metadata: Metadata = {
  title: "Home Page",
  description: "Welcome to t3-app-directory",
};
