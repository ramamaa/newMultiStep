"use client";
import { Title, Input, Button, Header } from "@/components";

export function Basic({ form, onChange, onChangeStep }) {
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
            <Button onClick={() => onChangeStep("password")} className="mt-40 ">
              Continue 1/3
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
