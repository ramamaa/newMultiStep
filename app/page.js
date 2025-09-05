"use client";
import { Basic, Password, Image, Date } from "@/components";

import { use, useState } from "react";

export default function Home() {
  const [step, setStep] = useState("basic");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  function submit() {
    setStep("password");
    ("");
  }

  if (step === "basic") {
    return <Basic form={form} onChange={setForm} onChangeStep={setStep} />;
  }
  if (step === "password") {
    return <Password form={form} onChange={setForm} onChangeStep={setStep} />;
  }
  if (step === "image") {
    return <Image form={form} onChange={setForm} onChangeStep={setStep} />;
  }
  if (step === "date") {
    return <Date onChangeStep={submit} />;
  }
}
