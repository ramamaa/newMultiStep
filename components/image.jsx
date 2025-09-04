import { Button, Header, Title, Input } from "@/components";

export function Image({ onChangeStep }) {
  return (
    <div>
      <div className="bg-white w-120 h-[655px] mt-[182px] mx-120 border rounded-lg border-white p-8">
        <Header></Header>
        <Title>Date of Birth</Title>
        <Input type={"date"}></Input>
        <Title>Profile image</Title>
        <Input
          type={"file"}
          className={"!w-[416px] !min-h-20 !h-[180px]"}
        ></Input>
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
