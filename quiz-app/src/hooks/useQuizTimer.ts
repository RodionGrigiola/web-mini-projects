import { useEffect } from "react";
import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction } from "../types/quiz";
import { QUIZ_STATUS } from "../constants/quizStatus";

export function useQuizTimer({
  status,
  dispatch,
}: {
  status: string;
  dispatch: React.Dispatch<QuizAction>;
  timeLeft: number;
}) {
  useEffect(() => {
    if (status !== QUIZ_STATUS.PLAYING) return;

    const interval = setInterval(() => {
      dispatch({ type: QUIZ_ACTION.TICK });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, dispatch]);
}
