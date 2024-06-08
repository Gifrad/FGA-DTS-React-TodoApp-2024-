const getTodos = () => {
    if (!localStorage.getItem('todos')) localStorage.setItem('todos', JSON.stringify([]));

    return JSON.parse(localStorage.getItem('todos'));
};

const setTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
};

const getSortedTodos = (type) => {
    return getTodos().sort((a, b) => {
        if (type === 'asc') {
            return b.isComplete - a.isComplete || a.id - b.id;
        }
        return a.isComplete - b.isComplete || b.id - a.id;
    });

};

const changeTodoStatus = (id) => {
    setTodos(getTodos().map((todo) => {
        if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }

        return todo;
    }));

    return getSortedTodos();
};

const removeTodo = (id) => {
    setTodos(getTodos().filter((todo) => todo.id !== id));

    return getSortedTodos();
};

const addTodo = (text) => {

    setTodos(getTodos().concat({
        id: getTodos().length + 1,
        text,
        isComplete: false,
    }));

    return getSortedTodos();
};

export { getTodos, changeTodoStatus, removeTodo, addTodo, getSortedTodos };