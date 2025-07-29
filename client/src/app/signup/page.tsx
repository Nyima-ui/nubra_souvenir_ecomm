"use client";
import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import StretchButton from "../components/StretchButton";
import DesktopHeader from "../components/DesktopHeader";
import Image from "next/image";

const Page = () => {
  const [pageState, setpageState] = useState("signup");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const togglePageState = () => {
    if (pageState === "signup") setpageState("login");
    else setpageState("signup");
  };
  return (
    <>
      <Header />
      <DesktopHeader />
      <section className="pt-[70px] bg-neutral-bg h-screen w-screen px-7.5 lg:px-15 flex gap-30 justify-between items-start overflow-hidden">
        <div className="md:max-w-[436px]">
          <form className="pt-15">
            <h1 className="font-century text-[23.05px] mb-5 tracking-[0.01em]">
              {pageState === "signup" ? "Sign Up" : "Log In"}
            </h1>
            {pageState === "signup" && (
              <>
                <Input
                  placeholder="First Name"
                  state={firstName}
                  setterFunc={setfirstName}
                />
                <Input
                  placeholder="Last Name"
                  state={lastName}
                  setterFunc={setlastName}
                />
              </>
            )}
            <Input placeholder="Email" state={email} setterFunc={setemail} />
            <Input
              placeholder="Password"
              state={password}
              setterFunc={setpassword}
            />
            <StretchButton
              buttonText={pageState === "signup" ? "Create Account" : "Log In"}
            />
          </form>
          <p
            className="font-grotesk-400 tracking-[0.01em] border-b w-fit cursor-pointer mt-3.5"
            onClick={togglePageState}
          >
            {pageState === "signup"
              ? "Already have an account? Sign In"
              : "Don’t have an account? Sign Up "}
          </p>
        </div>
        <div className="max-md:hidden min-w-[50%] border mt-10 h-full overflow-hidden">
             <Image
              src="/images/buddha.jpg"
              alt="Picture of Buddha for design purpose"
              height={620}
              width={508} 
              className="h-full w-full object-cover"
             />
        </div>
      </section>
    </>
  );
};

export default Page;
