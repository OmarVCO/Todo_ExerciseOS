import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Todo = (props) => {
    const [todo, setTodo] = useState();

const getTodo = async () =>{
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
        setTodo(res.data)
    }catch(error){
        console.log(error)
        alert(error)
    }
}
    useEffect(() => {
        getTodo();
    }, [props.newTodo]);

    const createTodo = () => {
        return todo.map((id) => {
            return (
                <div></div>
            );
        });
    };

    return (
        <Fragment>
            {todo && createTodo()}
        </Fragment>
    );
};

export default Todo;
