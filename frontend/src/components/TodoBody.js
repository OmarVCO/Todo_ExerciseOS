import Todo from '.Todo.js'

const TodoBody = (props) => {
    return (
        <section>
            <Todo newTodo={props}/>
        </section>
    )
};

export default TodoBody;
