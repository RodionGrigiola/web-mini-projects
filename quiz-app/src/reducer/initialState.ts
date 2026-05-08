import { QUIZ_STATUS } from "../constants/quizStatus";
import type { QuizState } from "../types/quiz";

export const initialState: QuizState = {
  status: QUIZ_STATUS.START,
  currentQuestionIndex: 0,
  score: 0,
  highScore: 0,
  selectedAnswerId: null,
  timeLeft: 300,
};
