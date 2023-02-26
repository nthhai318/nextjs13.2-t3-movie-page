"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const { data: sessionData } = useSession();
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      {sessionData && (
        <p className="text-[1.5rem]">
          Hello <strong>{sessionData.user.name}</strong>
        </p>
      )}
      <button
        className="w-[20rem] rounded-md bg-hightlight p-2"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {!sessionData ? "Sign In" : "Sign Out"}
      </button>
    </div>
  );
}
