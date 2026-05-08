import { useReducer } from "react";
import { initialState } from "./reducer/initialState";
import { quizReducer } from "./reducer/quizReducer";
import { QUIZ_STATUS } from "./constants/quizStatus";
import { StartScreen } from "./pages/StartScreen";
import { QuizScreen } from "./pages/QuizScreen";
import { ResultScreen } from "./pages/ResultScreen";

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="mb-6 text-4xl font-bold">Quiz App</h1>
      <div className="bg-slate-900 text-white p-10 flex items-center justify-center">
        {state.status === QUIZ_STATUS.START && (
          <StartScreen dispatch={dispatch} />
        )}

        {state.status === QUIZ_STATUS.PLAYING && (
          <QuizScreen state={state} dispatch={dispatch} />
        )}

        {state.status === QUIZ_STATUS.FINISHED && (
          <ResultScreen state={state} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}

export default App;
