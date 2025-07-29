import React from "react";

type InputProps = {
  placeholder: string;
  state: string;
  setterFunc: (value: string) => void;
};

const Input = ({ placeholder, state, setterFunc }: InputProps) => {
  return (
    <input
      type="text"
      id={placeholder}
      value={state}
      onChange={(e) => setterFunc(e.target.value)}
      placeholder={placeholder}
      className="w-full border-b border-black/70 py-3.5 my-2.5 outline-none font-grotesk-400 text-[19.02px] tracking-[0.01em]"
    />
  );
};

export default Input;
