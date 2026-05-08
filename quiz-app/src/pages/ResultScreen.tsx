import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction, QuizState } from "../types/quiz";

type Props = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export function ResultScreen({ state, dispatch }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">Finished!</h2>

      <p>Your score: {state.score}</p>
      <p>High score: {state.highScore}</p>

      <button
        className="rounded bg-blue-500 px-6 py-3"
        onClick={() => dispatch({ type: QUIZ_ACTION.RESTART })}>
        Restart
      </button>
    </div>
  );
}
