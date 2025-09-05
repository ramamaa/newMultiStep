"use client";
import { Button, Header, Title, Input } from "@/components";
import { useState } from "react";

export function Image({ onChangeStep }) {
  const [preview, setPreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }
  return (
    <div>
      <div className="bg-white w-120 h-[655px]  mt-[182px] mx-120 border rounded-lg border-white p-8">
        <Header></Header>
        <Title>Date of Birth</Title>
        <Input type={"date"}></Input>
        <Title>Profile image</Title>
        <div
          className={
            "w-[416px] min-h-20 h-[180px] bg-gray-400 overflow-hidden relative flex items-center justify-center flex-col"
          }
        >
          Add Image
          {preview && (
            <img
              src={preview}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <input
            type="file"
            className="absolute opacity-0 inset-0 "
            onChange={handleImageChange}
          ></input>
        </div>

        <Button variant="secondary" onClick={() => onChangeStep("password")}>
          Back
        </Button>
        <Button variant="primary" onClick={() => onChangeStep("date")}>
          Continue 3/3
        </Button>
      </div>
    </div>
  );
}
