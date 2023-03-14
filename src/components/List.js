import React from "react";
import { WrapperList, Item, ButtonTask } from "./List.styled";

function List() {
  return (
    <WrapperList>
      <Item>Task 1</Item>
      <ButtonTask>X</ButtonTask>
    </WrapperList>
  );
}
export default List;
