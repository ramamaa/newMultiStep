"use client";
import { Title, Input, Button } from "@/components";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  function submit() {
    console.log(form);
  }
  return (
    <div>
      <div className="bg-white w-120 h-[655px] mt-[182px] mx-120 border rounded-lg border-white">
        <div className="flex flex-col items-start gap-2 p-8 w-[100%]">
          <img src="/main 1.svg"></img>
          <h2 className="text-2xl font-semibold">Join Us! &#128526;</h2>
          <p className="text-[#8E8E8E] text-lg self-stretch">
            Please provide all current information accurately.
          </p>
          <div className="mt-7 flex flex-col gap-2 w-[100%]">
            <Title className="flex flex-row gap-0.5">First name</Title>
            <Input
              placeholder="Placeholder"
              type="text"
              value={form.firstName}
              onChange={(e) =>
                setForm({
                  ...form,
                  firstName: e.target.value,
                })
              }
            />
            <Title className="flex flex-row gap-0.5">Last name</Title>
            <Input
              placeholder="Placeholder"
              type="text"
              value={form.lastName}
              onChange={(e) =>
                setForm({
                  ...form,
                  lastName: e.target.value,
                })
              }
            />
            <Title className="flex flex-row gap-0.5">Username</Title>
            <Input
              placeholder="Placeholder"
              type="text"
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />
            <Button onClick={submit}>Continue 1/3 </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
