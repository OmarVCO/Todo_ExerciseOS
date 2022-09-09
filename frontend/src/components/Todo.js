import { useState } from "react";
import styles from './Styles.module.css'
// import axios from "axios";

const Todo = (props) => {

    // const [todo, setTodo] = useState();

    return (
        <li className={styles.todo}>
        <div className={styles.todoTitle}>
            <p>{props.title}</p>
        <div className={styles.todoCompleted}>
            <p>{props.completed}</p></div>
        <div className={styles.todoid}>
        <p>{props.id}</p></div>
        </div>
      </li>
    );
};

export default Todo;
