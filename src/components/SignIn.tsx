"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const { data: sessionData } = useSession();
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {sessionData && (
        <p className="text-[1.5rem]">Hello {sessionData.user.name}</p>
      )}
      <button
        className="rounded-md bg-teal-800 p-3 text-[1.5rem] "
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {!sessionData ? "Sign In" : "Sign Out"}
      </button>
    </div>
  );
}
