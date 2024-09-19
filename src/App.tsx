import React from "react";
import "./styles/global.css";
import { Header } from "./Components/Header/Header";
import { Task } from "./Components/Tasks/Task";

function App() {
  return (
    <>
      <Header />;
      <Task />
    </>
  );
}

export default App;
