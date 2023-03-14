import React from "react";
import { WrapperToDoList, H1 } from "./components/Wrapper.styled";
import BoxInput from "./components/BoxInput";
import List from "./components/List";

function App() {
  return (
    <WrapperToDoList>
      <H1>React To Do List !</H1>
      <BoxInput />
      <List />
    </WrapperToDoList>
  );
}

export default App;
