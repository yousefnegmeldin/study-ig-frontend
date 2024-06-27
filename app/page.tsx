// app/waitlist/page.tsx
"use client";

import ModalJoin from "./_waitlist_ui/ModalJoin";
import Image from "next/image";
import TESTLOGO from "../public/testlogo.png";
const Waitlist = () => {
  return (
    <main className="w-screen h-screen flex flex-col backdrop-blur-lg p-16 items-center gap-10 bg-gradient-to-t from-[#4888E7] to-slate-50 to-20%">
      <div className="bg-slate-300 p-8 rounded-full shadow-2xl border-gray-400 border-4">
        <h1 className="text-7xl font-bold">Study IG</h1>
      </div>
      {/* <Image src={TESTLOGO} alt="logo" width={300} /> */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl">Your all in one place for all kinds of IG stuff!</h2>
        <h3 className="text-2xl">join us now!</h3>
        <ModalJoin />
      </div>
    </main>
  );
};

export default Waitlist;
