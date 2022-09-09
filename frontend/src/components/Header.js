import React from "react";
import styles from './Styles.module.css'

const BttnFocusHdlr = () =>{
    document.getElementById('todo-input').focus()}

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h2>To-dos by OS _ v1.0</h2>
            <button onClick={BttnFocusHdlr}>Add a new Post!</button>
        </div>
    );
}

export default Header