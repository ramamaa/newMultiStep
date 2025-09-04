"use client";
import { Title, Input, Button, Header } from "@/components";
export function Password({ onChangeStep }) {
  return (
    <div className="bg-white w-120 h-[655px] mt-[182px] mx-120 border rounded-lg border-white p-8">
      <div className=" flex flex-col justify-between">
        <div>
          <Header></Header>
          <div className="flex flex-col gap-2 mt-7">
            <Title className=" ">Email</Title>
            <Input
              type="text"
              className="mt-2 ml-8 w-[368px] h-[44px] border border-[#E4E4E7] rounded-md"
            ></Input>
            <Title className=" ">Username</Title>
            <Input
              type="text"
              className="mt-2 ml-8 w-[368px] h-[44px] border border-[#E4E4E7] rounded-md"
            ></Input>
            <Title className=" ">Password</Title>
            <Input
              type="text"
              className="mt-2 ml-8 w-[368px] h-[44px] border border-[#E4E4E7] rounded-md"
            ></Input>
            <Title className=" ">Confirm Password</Title>
            <Input
              type="text"
              className="mt-2 ml-8 w-[368px] h-[44px] border border-[#E4E4E7] rounded-md"
            ></Input>
          </div>
        </div>

        <div className="mt-8 gap-1 flex">
          <Button variant={"secondary"} onClick={() => onChangeStep("basic")}>
            Back
          </Button>
          <Button variant={"primary"} onClick={() => onChangeStep("image")}>
            Continue 2/3
          </Button>
        </div>
      </div>
    </div>
  );
}
