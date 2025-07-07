"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="text-xl font-bold flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            SchooLama
          </h1>
          <h2>Sign in to your account</h2>

          <Clerk.GlobalError />
          <Clerk.Field name="identifier">
            <Clerk.Label>Username</Clerk.Label>
            <Clerk.Input type="text" required />
            <Clerk.FieldError />
          </Clerk.Field>
          <Clerk.Field name="password">
            <Clerk.Label>Password</Clerk.Label>
            <Clerk.Input type="password" required />
            <Clerk.FieldError />
          </Clerk.Field>
          <SignIn.Action submit>Sign In</SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
