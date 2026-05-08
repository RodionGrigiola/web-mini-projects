import { useReducer } from "react";
import { initialState } from "./reducer/initialState";
import { quizReducer } from "./reducer/quizReducer";

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Quiz App</h1>

      <p>{state.status}</p>

      <button
        className="rounded-lg bg-blue-500 px-6 py-3"
        onClick={() => dispatch({ type: "START" })}>
        Start
      </button>
    </div>
  );
}

export default App;
