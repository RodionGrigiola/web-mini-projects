import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction } from "../types/quiz";

type Props = {
  dispatch: React.Dispatch<QuizAction>;
};

export function StartScreen({ dispatch }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">Welcome to Quiz</h2>

      <button
        className="rounded bg-blue-500 px-6 py-3"
        onClick={() => dispatch({ type: QUIZ_ACTION.START_QUIZ })}>
        Start
      </button>
    </div>
  );
}
