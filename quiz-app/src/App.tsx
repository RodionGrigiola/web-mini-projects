import { useReducer } from "react";
import { questions } from "./data/questions";
import { initialState } from "./reducer/initialState";
import { quizReducer } from "./reducer/quizReducer";

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const currentQuestion = questions[state.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="mb-6 text-4xl font-bold">Quiz App</h1>

      <p>Status: {state.status}</p>
      <p>Score: {state.score}</p>

      {state.status === "start" && (
        <button
          className="mt-5 rounded-lg bg-blue-500 px-6 py-3"
          onClick={() => dispatch({ type: "START" })}>
          Start
        </button>
      )}

      {state.status === "playing" && (
        <div className="mt-6 space-y-4">
          <h2 className="text-2xl">{currentQuestion.question}</h2>

          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              className="block rounded bg-slate-700 px-4 py-3"
              onClick={() =>
                dispatch({
                  type: "SELECT_ANSWER",
                  payload: answer.id,
                })
              }>
              {answer.text}
            </button>
          ))}

          <button
            className="rounded bg-green-600 px-6 py-3"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
            Next
          </button>
        </div>
      )}

      {state.status === "finished" && (
        <div className="mt-6">
          <h2 className="text-3xl font-bold">Finished!</h2>

          <p>Your score: {state.score}</p>
          <p>High score: {state.highScore}</p>
        </div>
      )}
    </div>
  );
}

export default App;
