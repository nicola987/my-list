import React, { useState } from "react";
import { WrapperInput, Input, ButtonInput } from "./BoxInput.styled";

function BoxInput() {
  const [input, setInput] = useState("");

  return (
    <WrapperInput>
      <Input type="text" placeholder="Write your task..." value={input} />
      <ButtonInput>Add</ButtonInput>
    </WrapperInput>
  );
}
export default BoxInput;
