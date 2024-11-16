import React from 'react'
import styles from "./TodoList.module.css";

 const TodoList = (props) => {
  return (
    <li className={styles.listItem}>
      {props.item}
      <span className={styles.icons}>
      <i className="fa-solid fa-trash-can icon-delete" onClick={e=>{
        props.deleteItem(props.index)
      }}></i>
      </span>
    </li>
  )
}
export default TodoList