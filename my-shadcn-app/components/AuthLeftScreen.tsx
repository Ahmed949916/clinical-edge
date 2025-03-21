import { AuthPic } from "@/assests/Icons";
import Image from "next/image";
import React from "react";

const AuthLeftScreen = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={AuthPic}
        alt="Finding Wilberforce Ethnic Studies Project"
        layout="fill"
        objectFit="cover"
        priority
        className="h-screen"
      />
      <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center p-4 text-white text-center">
        <div className="max-w-md bg-[#E3EAFD] p-6 rounded-lg shadow-lg text-gray-800 w-[492px]">
          <h2 className="text-sm font-bold mb-1.5">
            FINDING WILBERFORCE ETHNIC STUDIES PROJECT
          </h2>
          <p className="text-base font-normal text-[#0F132499] leading-6 tracking-[-0.2px]">
            Are you interested in earning an Ethnic Studies Course Completion
            Seal, but you don&apos;t have a registration code yet?
          </p>
          <p className="text-base font-normal text-[#0F132499] leading-6 tracking-[-0.2px] mb-4">
            Contact Christina Sage at makeachoice.com or 949-324-5440 to find
            out more information about how your organization can participate!
          </p>
          <button
            className="w-full flex h-8 p-[6px_10px] justify-center items-center gap-[2px] self-stretch 
              rounded-lg border border-[#DEE0E3] bg-white shadow-[0px_1px_2px_rgba(20,21,26,0.05)]"
          >
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthLeftScreen;
