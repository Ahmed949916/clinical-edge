"use client";
import React from "react";
import { CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackArrow, Logo } from "@/assests/Icons";
import AuthLeftScreen from "@/components/AuthLeftScreen";

const CheckMailRight = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen  m-auto">
        <div className="w-[588]">
          <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition mb-20 cursor-pointer">
            <BackArrow />
          </button>
          <div className="flex items-center gap-1 mb-20">
            <Image src={Logo} alt="Logo" width={32} height={32} className="" />
            <h1 className="text-xl font-bold ">Clinical Edge</h1>
          </div>
          <h6 className="text-2xl font-semibold  text-primary leading-8 tracking-[-0.3px] mb-2">
            Check Your Email
          </h6>
          <p className="text-base font-normal  text-[#0F132499] leading-6 tracking-[-0.2px] mb-8">
            We&apos;ve sent you a password reset link at [your email]. Click the
            link in the email to set a new password.
          </p>

          <CardContent className="p-0  flex flex-col gap-7">
            <div className="flex flex-col gap-3"></div>

            <CardFooter className="flex flex-col p-0 gap-6">
              <div className="flex items-center gap-2 w-full">
                <div className="w-[25%] h-[2px] bg-[#E9EAEC]"></div>
                <p className="w-[50%] text-xs font-medium text-[rgba(15,19,36,0.6)] text-center leading-4 tracking-[0px]">
                  Didn’t receive the email? Check your spam folder!
                </p>
                <div className="w-[25%] h-[2px] bg-[#E9EAEC]"></div>
              </div>

              <Button className="flex p-[10px_12px] justify-center items-center gap-1 self-stretch w-full bg-[#14151A] text-white hover:bg-gray-800 rounded-xl shadow-xs cursor-pointer text-sm font-medium">
                Resend Link
              </Button>

              <Button
                variant="outline"
                className="flex p-[10px_12px] justify-center items-center gap-[4px] self-stretch w-full mt-[8px] rounded-[12px] bg-[rgba(10,15,41,0.04)] cursor-pointer text-sm font-medium"
              >
                Change email
              </Button>
            </CardFooter>
          </CardContent>
        </div>
      </div>
    </>
  );
};
const CheckEmail = () => {
  return (
    <div className="flex gap-4 w-full ">
      <div className="w-full md:w-[45%] h-screen">
        <AuthLeftScreen />
      </div>
      <div className="w-full md:w-[55%] overflow-y-auto">
        <CheckMailRight />
      </div>
    </div>
  );
};
export default CheckEmail;
