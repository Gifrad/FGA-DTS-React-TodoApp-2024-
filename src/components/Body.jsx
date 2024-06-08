import { createContext, useState } from "react";
import { addTodo, changeTodoStatus, getSortedTodos, removeTodo } from "../databases/todos";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export const TodoContext = createContext();

const Body = () => {

    const [todos, setTodos] = useState(getSortedTodos());
    const handleStatus = (id) => setTodos(changeTodoStatus(id));
    const handleRemoveTodo = (id) => setTodos(removeTodo(id));
    const handleAdd = (text) => setTodos(addTodo(text));


    return (
        <>
            <TodoContext.Provider value={{ handleStatus, handleRemoveTodo, handleAdd }}>
                <div className="h-screen flex items-center justify-center flex-col">
                    <div className="card border-double border-4 border-gray-600">
                        <div className="card-body">
                            <h3 className="text-3xl mb-4 text-center">TASK</h3>
                            <TodoForm />
                            <TodoList
                                todos={todos}
                            />
                        </div>
                    </div>
                </div>
            </TodoContext.Provider>

        </>
    );
};

export default Body;