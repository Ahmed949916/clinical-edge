import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../../assests/logo.png";
const Page = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen my-24 m-auto">
        <div className="w-[588]">
          <h6 className="text-2xl font-semibold text-center text-primary leading-8 tracking-[-0.3px] mb-2">
            FINDING WILBERFORCE ETHNIC STUDIES PROJECT
          </h6>
          <p className="text-base font-normal text-center text-[#0F132499] leading-6 tracking-[-0.2px] mb-6">
            Are you interested in earning an Ethnic Studies Course Completion
            Seal?
          </p>
          <p className="text-base font-normal text-center text-[#0F132499] leading-6 tracking-[-0.2px] mb-7">
            Contact Christina Supe at makeachoice.com or 949-324-5440 to find
            out more information about how your organization can participate!
          </p>
          <Card className="w-[588] bg-white rounded-lg">
            <CardContent className="p-7  flex flex-col gap-7">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Label>Hospital Code</Label>
                  <Input placeholder="12U978643NL" />
                  <p className="text-sm font-normal text-[rgba(13,17,38,0.4)] leading-5 tracking-[-0.1px]">
                    This code is provided by your hospital administrator
                  </p>
                </div>

                <div className="mb-3  flex flex-col gap-2">
                  <Label className="text-sm font-medium">Full Name</Label>
                  <Input placeholder="John Doe" />
                </div>

                <div className="mb-3  flex flex-col gap-2">
                  <Label className="text-sm font-medium">Email</Label>
                  <Input type="email" placeholder="john@hospital.com" />
                </div>

                <div className="mb-3  flex flex-col gap-2">
                  <Label className="text-sm font-medium">Password</Label>
                  <Input type="password" />
                </div>

                <div className="mb-3  flex flex-col gap-2">
                  <Label className="text-sm font-medium">
                    Re-write Password
                  </Label>
                  <Input type="password" />
                </div>
              </div>

              <div className="flex items-center space-x-2 font-medium text-sm">
                <Checkbox />
                <Label>I agree to terms and services</Label>
              </div>

              <CardFooter className="flex flex-col  gap-7">
                <Button className="flex p-[10px_12px] justify-center items-center gap-1 self-stretch w-full bg-[#14151A] text-white hover:bg-gray-800 rounded-xl shadow-xs cursor-pointer text-sm font-medium">
                  Register
                </Button>
                <div className="flex items-center gap-2 w-full">
                  <div className="w-[25%] h-[2px] bg-[#E9EAEC]"></div>
                  <p className="w-[50%] text-xs font-medium text-[rgba(15,19,36,0.6)] text-center leading-4 tracking-[0px]">
                    Already have an account?
                  </p>
                  <div className="w-[25%] h-[2px] bg-[#E9EAEC]"></div>
                </div>

                <Button
                  variant="outline"
                  className="flex p-[10px_12px] justify-center items-center gap-[4px] self-stretch w-full mt-[8px] rounded-[12px] bg-[rgba(10,15,41,0.04)] cursor-pointer text-sm font-medium"
                >
                  Signup
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Page;
