"use client";
import { Basic, Image } from "@/components";

import { use, useState } from "react";

export default function Home() {
  const [step, setStep] = useState("basic");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  function submit() {
    setStep("image");
    ("");
  }

  if (step === "basic") {
    return <Basic form={form} onChange={setForm} onChangeStep={setStep} />;
  }
  if (step === "image") {
    return <Image />;
  }
}
