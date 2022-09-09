import Todo from '.Todo.js'

const TodoBody = (props) => {
    return (
        <section>
            <Todo Todo={props}/>
        </section>
    )
};

export default TodoBody;
