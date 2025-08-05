"use client";
import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import StretchButton from "../components/StretchButton";
import DesktopHeader from "../components/DesktopHeader";
import Image from "next/image";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success('Login successful!');
        window.location.href = '/';
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!firstName || !lastName || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Account created successfully! Please log in.');
        setpageState('login');
        setfirstName('');
        setlastName('');
        setpassword('');
      } else {
        toast.error(data.error || 'Signup failed. Please try again.');
      }
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    }
  };
  return (
    <>
      <Header />
      <DesktopHeader />
      <section className="pt-[70px] bg-neutral-bg h-screen w-screen px-7.5 lg:px-15 flex gap-30 justify-between items-start overflow-hidden">
        <div className="md:max-w-[436px]">
          <form className="pt-15" onSubmit={pageState === "signup" ? handleSignup : handleLogin}>
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
              type="password"
            />
            <button
              className="w-full border py-2.5 mt-3"
              onClick={(e) => {
                e.preventDefault();
                signIn("google", { callbackUrl: "/" });
              }}
            >
              <span className="capitalize">{pageState}</span> with Google
            </button>
            <StretchButton
              buttonText={pageState === "signup" ? "Create Account" : "Log In"}
              type="submit"
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
