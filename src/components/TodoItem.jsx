import { useContext } from "react";
import { TodoContext } from "./Body";

const TodoItem = ({ todos }) => {
    const { handleStatus, handleRemoveTodo } = useContext(TodoContext);
    return (
        <div className={todos.isComplete ?
            "flex justify-between border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96 bg-red-500" :
            "flex justify-between border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96"}
            onClick={() => {
                handleStatus(todos.id);
            }}
        >
            <p className="select-none">{
                todos.isComplete ? <>✓ <del>{todos.text}</del></> : <>➤ {todos.text}</>
            }</p>
            <span
                className="hover:text-red-400 cursor-pointer select-none"
                onClick={() => {
                    handleRemoveTodo(todos.id)
                }}
            >
                X</span>
        </div >
    );
};

export default TodoItem;