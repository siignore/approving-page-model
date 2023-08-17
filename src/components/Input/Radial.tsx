import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface Props {
  setSelected: (value: string) => void;
}

const RadioGroupApproving = ({ setSelected }: Props) => (
  <form>
    <RadioGroup.Root className="flex flex-1 gap-4" defaultValue="approve" aria-label="View density">
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-4 h-4 rounded-full shadow-sm shadow-gray-800 hover:bg-neutral-300 outline-none cursor-default"
          value="pending"
          id="r1"
          onClick={() => setSelected("confirm")}
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-neutral-800" />
        </RadioGroup.Item>
        <label className="text-black text-md leading-none pl-4" htmlFor="r1">
          Pending
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-4 h-4 rounded-full shadow-sm shadow-gray-800 hover:bg-neutral-300 outline-none cursor-default"
          value="approve"
          id="r2"
          onClick={() => setSelected("approve selected")}
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-neutral-800" />
        </RadioGroup.Item>
        <label className="text-black text-md leading-none pl-4" htmlFor="r2">
          Approve
        </label>
      </div>
      <div className="flex items-center">
        <RadioGroup.Item
          className="bg-white w-4 h-4 rounded-full shadow-sm shadow-gray-800 hover:bg-neutral-300 outline-none cursor-default"
          value="refuse"
          id="r3"
          onClick={() => setSelected("refuse selected")}
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-neutral-800" />
        </RadioGroup.Item>
        <label className="text-black text-md leading-none pl-4" htmlFor="r3">
          Refuse
        </label>
      </div>
    </RadioGroup.Root>
  </form>
);

export default RadioGroupApproving;
