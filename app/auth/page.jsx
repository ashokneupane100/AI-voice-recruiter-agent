import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={400}
          height={100}
          className="w-[180px] rounded-2xl"
        />
        <div className="flex items-center flex-col">
          <Image
            src="/login.png"
            alt="login"
            width={600}
            height={400}
            className="w-[400px] h-[250px] rounded-2xl"
          />
          <h2 className="text-2xl font-bold text-center mt-5">Welcome to AIrecruiter</h2>
          <p className="text-gray-500 text-center">Sign in with Google Authentication</p>
          <Button className='mt-7 w-full'>Login with Google</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
