import type { QUIZ_ACTION } from "../constants/quizAction";
import { QUIZ_STATUS } from "../constants/quizStatus";

export type QuizStatus = (typeof QUIZ_STATUS)[keyof typeof QUIZ_STATUS];

export type QuizState = {
  status: QuizStatus;
  currentQuestionIndex: number;
  score: number;
  highScore: number;
  selectedAnswerId: number | null;
  timeLeft: number;
};

export type QuizAction =
  | { type: typeof QUIZ_ACTION.START_QUIZ }
  | { type: typeof QUIZ_ACTION.SELECT_ANSWER; payload: number }
  | { type: typeof QUIZ_ACTION.NEXT_QUESTION }
  | { type: typeof QUIZ_ACTION.RESTART }
  | { type: typeof QUIZ_ACTION.TICK }
  | { type: typeof QUIZ_ACTION.FINISH };
