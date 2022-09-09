import React, { useRef, useState } from "react";
import styles from "./Styles.module.css";
import axios from "axios";

const TodoForm = (props) => {
  const [userId, setUser] = useState("1");
  const [id, setUsername] = useState("john-doe");
  const [isEditing, setIsEditing] = useState(false);
  const [twootLength, setTwootLength] = useState(140);
  const todotitle = useRef();
  const date = new Date();
  const currentDate = date.toISOString().split("T")[0];
  const [twootLengthValid, setTwootLengthValid] = useState(true)

  const postTwootHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      author: user,
      content: twootContent.current.value,
      authorSlug: username,
      dateAdded: currentDate,
    };

    

    axios.post("https://twootros-app.herokuapp.com/twoot", { newTodo }).then((newData) => {
      props.updateFeed();
    });

    twootContent.current.value = "";
    setTwootLength(0)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };


  const twootLengthHandler = (event) => {
    const length = event.target.value.length;
    setTwootLength(140-length);

    if(length < 141 && length >= 0){
      setTwootLengthValid(true)
    } else setTwootLengthValid(false)

    // console.log(length)
  };

  return (
    <>
      <form onSubmit={postTwootHandler} className={styles.twootForm}>
        <div className={styles.userInfo}>
          <img className={styles.userIcon} src="https://avatars.dicebear.com/api/bottts/:seed.svg" alt="Icon pulled from Avatars.com"></img>
          <div> <span className={styles.ProfileUsername}>{user}</span> </div>
          <span className={styles.ProfileUsername}>@{username}</span>
        </div>
        <label className={styles.Create}>Compose Twoot</label>
        <input id="twoot-input" 
          onChange={twootLengthHandler}
          className={`${styles.twootInput} ${!twootLengthValid && styles.invalid}`}
          placeholder="What are you humming about?" ref={twootContent} required
        ></input>
        <div className={styles.twootFormFooter}>
          <button className={`${styles.twootFormFooterButton} ${!twootLengthValid && styles.invalidButton}`} type="submit" disabled={!twootLengthValid}>Twoot</button>
          <span className={`${!twootLengthValid && styles.invalid}`}>{twootLength > 140 ? '-'+ twootLength : twootLength} Characters remaining</span>
        </div>
      </form>
    </>
  );
};

export default TodoForm;