import Image from "next/image";
import { Header } from "./components/header";
import { UserForm } from "./form-generator";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UserForm />
        </main>
    </SessionProvider>
  );
}
