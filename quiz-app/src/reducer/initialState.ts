import { QUIZ_STATUS } from "../constants/quizStatus";
import type { QuizState } from "../types/quiz";
import { getHighScore } from "../utils/storage";

export const initialState: QuizState = {
  status: QUIZ_STATUS.START,
  currentQuestionIndex: 0,
  score: 0,
  highScore: getHighScore(),
  selectedAnswerId: null,
  timeLeft: 300,
  isRevealing: false,
};
