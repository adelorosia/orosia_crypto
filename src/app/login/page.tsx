"use client"

import { useState } from "react";
import Login from "@/components/login&register/Login";
import Register from "@/components/login&register/Register";
import MaxWithWrapper from "@/components/wrapper/MaxWithWrapper";
import { IoClose } from "react-icons/io5";
import Brand from "@/components/navbar.tsx/brand/Brand";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isActiveTab, setIsActiveTab] = useState(false);
const router=useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-foreground/70 fixed inset-0 backdrop-blur-sm  gap-16">
      

   
      <MaxWithWrapper className="flex justify-center lg:justify-between items-center">
   
        <div className="w-1/2 flex-col gap-8 hidden lg:flex">
          <h1 className="text-secondary font-Viga text-5xl">
            Welcome to <span className=" text-primary">Orosia</span>
          </h1>
          <p className=" text-muted text-xl text-justify leading-8">
            Your hub for discovering the latest articles and activities in the
            world of computers and information technology. Stay updated with the
            newest trends, connect with like-minded individuals, and join a
            vibrant community of tech enthusiasts. Dive into the future of
            technology with Orosia!
          </p>
        </div>

<div className="flex flex-col">
  <div className="flex justify-between items-center bg-white rounded-lg px-3 my-2 py-3">
    <Brand />
    <IoClose className="text-3xl cursor-pointer" onClick={()=>router.push("/")}/>
  </div>
<div className="w-[400px]">
          <div className="w-full grid grid-cols-2 bg-gray-100 rounded-md p-0.5">
            <button
              className={`${
                isActiveTab ? "bg-gray-100 text-gray-500" : "bg-white"
              } rounded-md py-1.5`}
              onClick={() => {
                setIsActiveTab(false);
              }}
            >
              Login
            </button>
            <button
              className={`${
                isActiveTab ? "bg-white" : "bg-gray-100 text-gray-500"
              } py-1.5 rounded-md`}
              onClick={() => {
                setIsActiveTab(true);
              }}
            >
              Register
            </button>
          </div>
          <div className="w-full flex flex-col bg-white my-3 px-4 py-8 rounded-md border shadow-lg">
            <Login
              className={`${isActiveTab ? "hidden" : "block"}`}
            />
            <Register className={`${isActiveTab ? "block" : "hidden"}`}  setIsActiveTab={setIsActiveTab}/>
          </div>
        </div>
</div>
      </MaxWithWrapper>
 
    </div>
  );
};

export default LoginPage;
