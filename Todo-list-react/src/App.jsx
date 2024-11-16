import React, { useState } from "react";
import styles from "./App.module.css";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [ListTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...ListTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...ListTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className={styles.maincontainer}>
      <div className={styles.centercontainer}>
        <h1 className={styles.appheading}>TODO LIST</h1>
        <hr /> <br />
        <TodoInput addList={addList} /> <br />
        {ListTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
