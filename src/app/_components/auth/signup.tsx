"use client";

import { useSignUp } from "@clerk/nextjs";

export function Signup() {
  const { signUp } = useSignUp();

  return (
    <div>
      <div>
        <button
          type="button"
          className="
            border border-gray-300 rounded-md shadow-sm
            px-4 py-2 bg-white text-base font-medium text-gray-700
            hover:bg-gray-50"
          onClick={async () => {
            if (signUp) {
              const res = await signUp.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/",
              });
            }
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
