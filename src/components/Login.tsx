"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        // src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="text-white font0bold text-3xl animate-pulse">Sign in to use ChatGPT</button>
    </div>
  );
}

export default Login;
