import { auth } from "@clerk/nextjs";
import { Signup } from "./_components/auth/signup";

export default function Home() {
  const { userId } = auth();

  console.log(userId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        top page
      </div>
    </main>
  );
}
