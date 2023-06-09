import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelTask } from "../redux/todo.slice";
import { SyncOutlined } from "@ant-design/icons";

const AsyncTasks = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todo);
  return tasks?.length ? (
    <ul className="absolute bottom-4 right-4 w-[400px] max-h-[300px] overflow-x-auto bg-slate-200 p-4 rounded-lg">
      {tasks.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          <SyncOutlined spin />
          <span className="text-sm mr-auto">{item.message}</span>
          <Button onClick={() => dispatch(cancelTask(item.id))}>Remove</Button>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default AsyncTasks;
