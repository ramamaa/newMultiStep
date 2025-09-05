"use client";
import { Title, Input, Button, Header } from "@/components";
import { useState } from "react";

export function Basic({ form, onChange, onChangeStep }) {
  const [errors, setErrors] = useState({});
  function gotoNext() {
    // validate
    const newErrors = {};

    const nameRegex = /^[a-zA-Z]{3,16}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (nameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else {
      newErrors.firstName = "You must enter your name";
    }
    if (nameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else {
      newErrors.lastName = "You must enter your name";
    }
    if (usernameRegex.test(form.username)) {
      newErrors.username = null;
    } else {
      newErrors.username = "You must enter your name";
    }
    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.username)
      onChangeStep("password");
  }
  console.log(errors);

  return (
    <div>
      <div className="bg-white w-120 h-[655px] mt-[182px] mx-120 border rounded-lg border-white p-8">
        <Header></Header>
        <div className="mt-7 flex flex-col gap-2 w-[100%]">
          <div className="flex flex-col gap-2">
            <Title className="flex flex-row gap-0.5">First name</Title>
            <Input
              placeholder="Placeholder"
              type="text"
              value={form.firstName}
              onChange={(e) =>
                onChange({
                  ...form,
                  firstName: e.target.value,
                })
              }
            />
            {errors.firstName && (
              <div className="text-red-400">{errors.firstName}</div>
            )}
            <Title className="flex flex-row gap-0.5">Last name</Title>
            <Input
              placeholder="Placeholder"
              type="text"
              value={form.lastName}
              onChange={(e) =>
                onChange({
                  ...form,
                  lastName: e.target.value,
                })
              }
            />
            {errors.lastName && (
              <div className="text-red-400">{errors.firstName}</div>
            )}
            <Title className="flex flex-row gap-0.5">Username</Title>
            <Input
              placeholder="Placeholder"
              type="text"
              value={form.username}
              onChange={(e) =>
                onChange({
                  ...form,
                  username: e.target.value,
                })
              }
            />
            {errors.username && (
              <div className="text-red-400">{errors.firstName}</div>
            )}
            <Button variant="primary" onClick={gotoNext} className="mt-40 ">
              Continue 1/3
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
