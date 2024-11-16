import React, { useState } from "react";
import styles from "./TodoInput.module.css";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState('');
  const HandleEnterPress=(e)=>{
    if(e.keyCode===13){
      props.addList(inputText)
      setInputText("")
    }
  }
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.inputBoxTodo}
        placeholder="Enter Your Todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={HandleEnterPress}
      />
      <button
        className={styles.addBtn}
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
      {/* <div>{inputText}</div> */}
    </div>
  );
};

export default TodoInput;
