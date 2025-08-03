"use client";
import Header from "../components/Header";
import DesktopHeader from "../components/DesktopHeader";
import Cart from "../components/Cart";
import { useState } from "react";
import Input from "../components/Input";
import StretchButton from "../components/StretchButton";

const Page = () => {
  const [fullName, setfullName] = useState("");
  const [pNumber, setpNumber] = useState("");
  const [email, setemail] = useState("");
  const [shippingAddress, setshippingAddress] = useState("");
  const [pinCode, setpinCode] = useState("");

  return (
    <section className="w-full bg-neutral-bg ">
      <Header />
      <DesktopHeader />
      <div className="flex flex-row-reverse">
        <Cart />
        <main className="sm:py-30 max-w-[450px] overflow-hidden ml-5 md:ml-15">
          <h1 className="text-[19.02px] md:text-[23.03px]">Checkout</h1>
          <form>
            <Input
              placeholder="Full Name"
              state={fullName}
              setterFunc={setfullName}
            />
            <Input
              placeholder="Phone Number"
              state={pNumber}
              setterFunc={setpNumber}
            />
            <Input placeholder="Email" state={email} setterFunc={setemail} />
            <Input
              placeholder="Shipping Address"
              state={shippingAddress}
              setterFunc={setshippingAddress}
            />
            <Input
              placeholder="Pin Code"
              state={pinCode}
              setterFunc={setpinCode}
            />
            <StretchButton buttonText="Continue to Payment" />
          </form>
        </main>
      </div>
    </section>
  );
};

export default Page;
