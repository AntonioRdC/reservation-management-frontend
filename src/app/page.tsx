import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-400 to-rose-800"
    >
      <div className="text-center mb-10">
        <h1 className="text-6xl font-semibold text-white drop-shadow-sm">
          Auth
        </h1>
      </div>
      <div>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Sign-In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
