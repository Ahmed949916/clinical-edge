"use client";
import React, { useState } from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye, EyeOpen, Information, Logo } from "@/assests/Icons";
import AuthLeftScreen from "@/components/AuthLeftScreen";
import { useRouter } from "next/navigation";

const SignupRight = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen m-auto">
        <div className="w-[588px]">
          <div className="flex items-center gap-1 mb-12">
            <Image src={Logo} alt="Logo" width={32} height={32} className="" />
            <h1 className="text-xl font-bold ">Clinical Edge</h1>
          </div>
          <h6 className="text-2xl font-semibold text-primary leading-8 tracking-[-0.3px] mb-2">
            Join Clinical Edge
          </h6>
          <p className="text-base font-normal text-[#0F132499] leading-6 tracking-[-0.2px] mb-9">
            Optimize your workflow with powerful clinical tools and real-time
            insights.
          </p>

          <CardContent className="p-0 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <Label>Hospital Code</Label>
                <Input placeholder="12U978643NL" />
                <p className="text-sm font-normal text-[rgba(13,17,38,0.4)] leading-5 tracking-[-0.1px]">
                  This code is provided by your hospital administrator
                </p>
              </div>

              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium">Full Name</Label>
                <Input placeholder="John Doe" />
              </div>

              <div className=" flex flex-col gap-2">
                <Label className="text-sm font-medium">Email</Label>
                <Input type="email" placeholder="john@hospital.com" />
              </div>

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
                <div className="flex gap-1 items-center">
                  <Information />
                  <p className="text-[rgba(13,17,38,0.4)] font-inter text-sm font-normal leading-5 tracking-[0.1px]">
                    Must be at least 8 characters with a mix of letters,
                    numbers, and a special character
                  </p>
                </div>
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

            <div className="flex items-center space-x-2 font-medium text-sm">
              <Checkbox />
              <Label>I agree to terms and services</Label>
            </div>

            <CardFooter className="flex flex-col p-0 gap-7">
              <Button className="flex p-[10px_12px] justify-center items-center gap-1 self-stretch w-full bg-[#14151A] text-white hover:bg-gray-800 rounded-xl shadow-xs cursor-pointer text-sm font-medium">
                Register
              </Button>
              <div className="flex items-center gap-2 w-full">
                <div className="w-[100%] h-[2px] bg-[#E9EAEC]"></div>
                <p className="min-w-[148px] text-xs font-medium text-[rgba(15,19,36,0.6)] text-center leading-4 tracking-[0px]">
                  Already have an account?
                </p>
                <div className="w-[100%] h-[2px] bg-[#E9EAEC]"></div>
              </div>

              <Button
                variant="outline"
                className="flex p-[10px_12px] justify-center items-center gap-[4px] self-stretch w-full mt-[8px] rounded-[12px] bg-[rgba(10,15,41,0.04)] cursor-pointer text-sm font-medium"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </Button>
            </CardFooter>
          </CardContent>
        </div>
      </div>
    </>
  );
};

const Signup = () => {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-full md:w-[45%] h-screen">
        <AuthLeftScreen />
      </div>
      <div className="w-full md:w-[55%] overflow-y-auto">
        <SignupRight />
      </div>
    </div>
  );
};

export default Signup;
