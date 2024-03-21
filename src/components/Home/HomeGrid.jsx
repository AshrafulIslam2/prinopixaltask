import Image from "next/image";
import React from "react";
import gridimg from "../../../public/gridimage01.webp";
import gridimg1 from "../../../public/gridimage02.webp";
import gridimg2 from "../../../public/gridimage03.webp";
import gridimg3 from "../../../public/gridimage04.webp";
import gridimg4 from "../../../public/gridimage05.webp";
import gridimg5 from "../../../public/gridimage06.webp";

const HomeGrid = () => {
  return (
    <div className="py-[200px] ">
      <div className="grid grid-cols-3  w-full max-w-[1220px]">
        <div className="">
          <div className="relative group">
            <Image
              src={gridimg}
              alt="grid"
              className=" border border-green-100"
            />
            <div className="absolute bg-white top-0 h-0 transition-all ease-in-out duration-500 invisible group-hover:visible group-hover:h-full group-hover:p-[20px] flex flex-col gap-y-10">
              <h1 className="text-[18px] font-medium hidden group-hover:block">Introducing Tidal</h1>
              <p className="text-[16px] font-normal hidden group-hover:block">A moonshoot to protect human and sustainability</p>
              {/* <div className="grid grid-cols-2 place-items-center justify-between ">
                <h1>x project</h1>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
          <div className="relative group">
          <Image
            src={gridimg3}
            alt="grid"
            className=" "
          />
          <div className="absolute bg-white top-0 h-0 transition-all ease-in-out duration-500 invisible group-hover:visible group-hover:h-full group-hover:p-[20px] flex flex-col gap-y-10">
              <h1 className="text-[18px] font-medium hidden group-hover:block">Introducing Tidal</h1>
              <p className="text-[16px] font-normal hidden group-hover:block">A moonshoot to protect human and sustainability</p>
              {/* <div className="grid grid-cols-2 place-items-center justify-between ">
                <h1>x project</h1>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
          
        </div>
        <div className="">
          <div className="relative group">
          <Image
            src={gridimg1}
            alt="grid"
            className="  "
          />
          <div className="absolute bg-white top-0 h-0 transition-all ease-in-out duration-500 invisible group-hover:visible group-hover:h-full group-hover:p-[20px] flex flex-col gap-y-10">
              <h1 className="text-[18px] font-medium hidden group-hover:block">Introducing Tidal</h1>
              <p className="text-[16px] font-normal hidden group-hover:block">A moonshoot to protect human and sustainability</p>
              {/* <div className="grid grid-cols-2 place-items-center justify-between ">
                <h1>x project</h1>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        <div className="relative group">
        <Image
            src={gridimg4}
            alt="grid"
            className="  h-[304px]  max-h-[304px] object-cover"
          />
          <div className="absolute bg-white top-0 h-0 transition-all ease-in-out duration-500 invisible group-hover:visible group-hover:h-full group-hover:p-[20px] flex flex-col gap-y-10">
              <h1 className="text-[18px] font-medium hidden group-hover:block">Introducing Tidal</h1>
              <p className="text-[16px] font-normal hidden group-hover:block">A moonshoot to protect human and sustainability</p>
              {/* <div className="grid grid-cols-2 place-items-center justify-between ">
                <h1>x project</h1>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
        </div>
          
        </div>
        <div className="">
         <div className="relative group">
         <Image
            src={gridimg2}
            alt="grid"
            className="    h-[304px] max-h-[304px] object-cover "
          />
          <div className="absolute bg-white top-0 h-0 transition-all ease-in-out duration-500 invisible group-hover:visible group-hover:h-full group-hover:p-[20px] flex flex-col gap-y-10">
              <h1 className="text-[18px] font-medium hidden group-hover:block">Introducing Tidal</h1>
              <p className="text-[16px] font-normal hidden group-hover:block">A moonshoot to protect human and sustainability</p>
              {/* <div className="grid grid-cols-2 place-items-center justify-between ">
                <h1>x project</h1>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
         </div>
         <div className="relative group">
         <Image
            src={gridimg5}
            alt="grid"
            className="  h-[698px]  max-h-[698px] object-cover lg:object-fill"
          />
          <div className="absolute bg-white top-0 h-0 transition-all ease-in-out duration-500 invisible group-hover:visible group-hover:h-full group-hover:p-[20px] flex flex-col gap-y-10">
              <h1 className="text-[18px] font-medium hidden group-hover:block">Introducing Tidal</h1>
              <p className="text-[16px] font-normal hidden group-hover:block">A moonshoot to protect human and sustainability</p>
              {/* <div className="grid grid-cols-2 place-items-center justify-between ">
                <h1>x project</h1>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
