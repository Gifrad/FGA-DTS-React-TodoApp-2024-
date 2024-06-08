const TodoItem = ({ todos }) => {
    return (
        <div className={todos.isComplete ?
            "border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96 bg-red-500" :
            "border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96"}>
            <p>{
                todos.isComplete ? <del>{todos.text}</del> : todos.text
            }</p>
        </div >
    );
};

export default TodoItem;