import { useState } from "react"
import Header from "./components/Header"
import { getTodos } from "./databases/todos"
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {

  const [todos] = useState(getTodos());
  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="card border-double border-4 border-gray-600">
          <div className="card-body">
            <h3 className="text-3xl mb-4 text-center">TASK</h3>
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
