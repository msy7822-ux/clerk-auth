import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// middlewareでアクセス制限をかける
const ACCESSABLE_LIST = [
  `${process.env.NEXT_PUBLIC_URL}/`,
  `${process.env.NEXT_PUBLIC_URL}/auth/signup`,
  `${process.env.NEXT_PUBLIC_URL}/auth/login`,
];

export default authMiddleware({
  async afterAuth(auth, req, _evt) {
    if (ACCESSABLE_LIST.includes(req.url)) return;

    const signInUrl = new URL("/?redirect=true", req.url);
    if (!auth.sessionId && !auth.userId)
      return NextResponse.redirect(signInUrl);
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
