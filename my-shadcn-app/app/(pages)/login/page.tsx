import React from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Logo } from "@/assests/Icons";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen my-24 m-auto w-full">
      <div className="w-[588]">
        <div className="flex items-center gap-1 mb-12">
          <Image src={Logo} alt="Logo" width={32} height={32} className="" />
          <h1 className="text-xl font-bold ">Clinical Edge</h1>
        </div>
        <h6 className="text-2xl font-semibold  text-primary leading-8 tracking-[-0.3px] mb-2">
          Welcome Back to Clinical Edge
        </h6>
        <p className="text-base font-normal  text-[#0F132499] leading-6 tracking-[-0.2px] mb-8">
          Your gateway to seamless clinical insights and patient management.
        </p>

        <CardContent className="p-0 flex flex-col gap-6">
          <div className="mb-3 flex flex-col gap-2">
            <Label className="text-sm font-medium">Username or Email</Label>
            <Input type="email" placeholder="joindoe@gmail.com" />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-sm font-medium">Password</Label>
            <Input type="password" />
            <div className="flex justify-end">
              <Button
                variant="link"
                className="text-sm font-medium text-[rgba(15,19,36,0.60)] text-center font-inter underline font-medium"
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "2px",
                }}
              >
                Forgot Password?
              </Button>
            </div>
          </div>
          <div className="w-full h-[2px] bg-[#E9EAEC]"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 font-medium text-sm">
              <Checkbox />
              <Label>Keep Me Signed In</Label>
            </div>
          </div>

          <CardFooter className="flex flex-col gap-7 p-0">
            <Button className="flex  justify-center items-center gap-1 self-stretch w-full bg-[#14151A] text-white hover:bg-gray-800 rounded-xl shadow-xs cursor-pointer text-sm font-medium">
              Login
            </Button>
            <div className="flex items-center gap-2 w-full">
              <div className="w-[30%] h-[2px] bg-[#E9EAEC]"></div>
              <p className="w-[40%] text-xs font-medium text-[rgba(15,19,36,0.6)] text-center leading-4 tracking-[0px]">
                Do not have an account?
              </p>
              <div className="w-[30%] h-[2px] bg-[#E9EAEC]"></div>
            </div>

            <Button
              variant="outline"
              className="flex  justify-center items-center gap-[4px] self-stretch w-full mt-[8px] rounded-[12px] bg-[rgba(10,15,41,0.04)] cursor-pointer text-sm font-medium"
            >
              Register
            </Button>
          </CardFooter>
        </CardContent>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <div className="flex gap-4 w-full">
      <Login />
      <Login />
    </div>
  );
};

export default Page;
