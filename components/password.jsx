"use client";
import { Title, Input, Button, Header } from "@/components";
import { useState } from "react";
export function Password({ form, onChange, onChangeStep }) {
  const [errors, setErrors] = useState({});
  function gotoNext() {
    // validate
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    const nameRegex = /^[a-zA-Z]{3,16}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "wrong email";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.lastName && !newErrors.username)
      onChangeStep("image");
  }
  console.log(errors);

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
              value={form.email}
              onChange={(e) =>
                onChange({
                  ...form,
                  firstName: e.target.value,
                })
              }
            />
            {errors.email && <div className="text-red-400">{errors.email}</div>}
            <Title className=" ">Phone number</Title>
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
          <Button variant={"primary"} onClick={gotoNext}>
            Continue 2/3
          </Button>
        </div>
      </div>
    </div>
  );
}
