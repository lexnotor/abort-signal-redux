import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AsyncTasks from "./components/AsyncTasks";
import Todo from "./components/Todo";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
        <AsyncTasks />
      </Provider>
    </>
  );
}

export default App;
