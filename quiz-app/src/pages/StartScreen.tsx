import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction } from "../types/quiz";
import { Button } from "../components/Button";
import { ScreenWrapper } from "../components/ScreenWrapper";

type Props = {
  dispatch: React.Dispatch<QuizAction>;
};

export function StartScreen({ dispatch }: Props) {
  return (
    <ScreenWrapper>
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Quiz Challenge</h1>
        <p className="text-slate-300 text-sm">
          Test your React knowledge in 5 quick questions
        </p>
      </div>

      <div className="w-full bg-slate-700/50 rounded-lg p-4 text-sm text-slate-300">
        <p>• 5 questions</p>
        <p>• 5 minutes timer</p>
        <p>• instant feedback</p>
      </div>

      <Button
        variant="primary"
        className="w-full"
        onClick={() => dispatch({ type: QUIZ_ACTION.START_QUIZ })}>
        Start Quiz
      </Button>
    </ScreenWrapper>
  );
}
