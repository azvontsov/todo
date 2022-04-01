import { Card } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <Card sx={{ maxWidth: 400, marginTop: 2, color: red }}>
      <li key={item.id}>
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns">
          <button onClick={() => changeFocus()}>Edit</button>
          <button onClick={() => completeTodo(item.id)}>Complete</button>
          <button onClick={() => removeTodo(item.id)}>Delete</button>{" "}
        </div>
        {item.completed && <span className="completed">done</span>}
      </li>
    </Card>
  );
};

export default TodoItem;
