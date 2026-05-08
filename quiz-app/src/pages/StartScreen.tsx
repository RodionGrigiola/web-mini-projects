import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction } from "../types/quiz";
import { Button } from "../components/Button";

type Props = {
  dispatch: React.Dispatch<QuizAction>;
};

export function StartScreen({ dispatch }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">Welcome to Quiz</h2>

      <Button
        variant="primary"
        onClick={() => dispatch({ type: QUIZ_ACTION.START_QUIZ })}>
        Start
      </Button>
    </div>
  );
}
