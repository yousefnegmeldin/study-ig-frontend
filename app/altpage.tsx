import React from "react";
import ModalJoin from "@/app/_waitlist_ui/ModalJoin";
import Image from "next/image";
import Book from "@/public/book.svg";
const altpage = () => {
  return (
    <main className=" h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="bg-gradient-to-t from-[#4888E7] to-slate-50 to-30% absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
      <div>
        <h1 className="text-7xl font-bold text-brand">Study IG</h1>
        <Image alt="logo" src={Book} width={300} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-gray-500">Your all in one place for all kinds of IG stuff!</h2>
        <h3 className="text-2xl font-bold text-gray-500">join us now!</h3>
        <ModalJoin />
      </div>
    </main>
  );
};

export default altpage;
