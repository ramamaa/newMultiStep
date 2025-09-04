import { Button, Header } from "@/components";

export function Date({ onChangeStep }) {
  return (
    <div>
      <div className="bg-white w-120 h-[655px] mt-[182px] mx-120 border rounded-lg border-white p-8">
        <Header></Header>
        <Button variant={"secondary"} onClick={() => onChangeStep("image")}>
          Back
        </Button>
        <Button variant={"primary"} onClick={onChangeStep}>
          Submit
        </Button>
      </div>
    </div>
  );
}
