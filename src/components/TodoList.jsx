import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    todos={todo}
                />
            })}
        </>
    );
};

export default TodoList;