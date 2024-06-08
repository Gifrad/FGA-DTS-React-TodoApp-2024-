import { useContext, useState } from "react";
import { TodoContext } from "./Body";

const TodoForm = () => {
    const [text, setText] = useState('');

    const { handleAdd } = useContext(TodoContext);

    const handleInputText = (e) => {
        setText(e.target.value);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleAdd(text);
                setText('');
            }}
        >
            <input
                required
                onChange={handleInputText}
                type="text"
                className="border-solid border-2 border-gray-400 p-2 rounded-xl m-1 min-w-96"
                placeholder="Masukan Task"
                value={text}
            />
            <button
                type="submit"
                className="bg-blue-400 text-white p-2 rounded-xl m-1"
            >ADD</button>
        </form>
    );
};

export default TodoForm;