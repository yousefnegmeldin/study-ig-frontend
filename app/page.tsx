// app/waitlist/page.tsx
"use client";
import ModalJoin from "./_waitlist_ui/ModalJoin";
import Image from "next/image";
import Book from "@/public/book.svg";
const Waitlist = () => {
  return (
    // <main className="w-screen h-screen flex justify-around backdrop-blur-lg p-16 items-center gap-10 bg-gradient-to-t from-[#4888E7] to-slate-50 to-20%">
    //   <div>
    //     <h1 className="text-7xl font-bold text-brand">Study IG</h1>
    //     <Image alt="logo" src={Book} width={300} />
    //   </div>
    //   <div className="flex flex-col justify-center items-center">
    //     <h2 className="text-4xl font-bold text-gray-500">Your all in one place for all kinds of IG stuff!</h2>
    //     <h3 className="text-2xl font-bold text-gray-500">join us now!</h3>
    //     <ModalJoin />
    //   </div>
    // </main>
    <main className=" h-[90rem] lg:h-screen w-screen bg-white bg-grid-black/[0.2] relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10">
      {/* Radial gradient for the container to give a faded look */}
      <div className="bg-gradient-to-t from-[#4888E7] to-slate-50 to-30% absolute pointer-events-none inset-0 flex items-center justify-center bg-white lg:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      Backgrounds
    </p> */}
      <div className=" z-10 lg:z-1 h-1/3 lg:h-1/2 p-8 shadow-2xl bg-white bg-opacity-40 rounded-lg lg:backdrop-blur-lg border border-white">
        <h1 className="text-7xl font-bold text-brand">Study IG</h1>
        <Image alt="logo" src={Book} width={300} />
      </div>

      <div className="z-10 lg:z-1 h-1/2 lg:m-0 m-4 flex flex-col gap-4 lg:w-1/5 justify-center items-center p-8 shadow-2xl bg-white bg-opacity-40 rounded-lg lg:backdrop-blur-lg border border-white">
        <h2 className="text-4xl font-bold  text-center">Your go-to place for all kinds of IG stuff</h2>
        <h3 className="text-2xl font-bold text-center my-8">Join the waitlist now for exclusive perks when we launch!</h3>
        <ModalJoin />
      </div>
    </main>
  );
};

export default Waitlist;
