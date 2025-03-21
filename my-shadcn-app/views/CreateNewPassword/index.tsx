"use client";
import React, { useState } from "react";
import { CardContent, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackArrow, Eye, EyeOpen, Information, Logo } from "@/assests/Icons";
import AuthLeftScreen from "@/components/AuthLeftScreen";

const CreateNewPasswordRight = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen m-auto">
        <div className="w-[588px]">
          <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition mb-11 cursor-pointer">
            <BackArrow />
          </button>
          <div className="flex items-center gap-1 mb-11">
            <Image src={Logo} alt="Logo" width={32} height={32} className="" />
            <h1 className="text-xl font-bold ">Clinical Edge</h1>
          </div>
          <h6 className="text-2xl font-semibold text-primary leading-8 tracking-[-0.3px] mb-2">
            Create a New Password
          </h6>
          <p className="text-base font-normal text-[#0F132499] leading-6 tracking-[-0.2px] mb-8">
            Choose a strong password to keep your account secure.
          </p>

          <CardContent className="p-0 flex flex-col gap-7">
            <div className=" flex flex-col gap-2">
              <Label className="text-sm font-medium">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOpen /> : <Eye />}
                </button>
              </div>
              <div className="flex gap-1 items-center mb-1">
                <Information />
                <p className="text-[rgba(13,17,38,0.4)] font-inter text-sm font-normal leading-5 tracking-[0.1px]">
                  Must be at least 8 characters with a mix of letters, numbers,
                  and a special character
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium">Re-write Password</Label>
                <div className="relative">
                  <Input
                    type={showRePassword ? "text" : "password"}
                    placeholder="********"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowRePassword(!showRePassword)}
                  >
                    {showRePassword ? <EyeOpen /> : <Eye />}
                  </button>
                </div>
              </div>
            </div>

            <CardFooter className="flex flex-col p-0 gap-7">
              <Button className="flex p-[10px_12px] justify-center items-center gap-1 self-stretch w-full bg-[#14151A] text-white hover:bg-gray-800 rounded-xl shadow-xs cursor-pointer text-sm font-medium">
                Update Password
              </Button>
            </CardFooter>
          </CardContent>
        </div>
      </div>
    </>
  );
};
const CreateNewPassword = () => {
  return (
    <div className="flex gap-4 w-full ">
      <div className="w-full md:w-[45%] h-screen">
        <AuthLeftScreen />
      </div>
      <div className="w-full md:w-[55%] overflow-y-auto">
        <CreateNewPasswordRight />
      </div>
    </div>
  );
};
export default CreateNewPassword;
