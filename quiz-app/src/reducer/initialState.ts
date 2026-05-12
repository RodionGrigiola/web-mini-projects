import { QUIZ_STATUS } from "../constants/quizStatus";
import { questions } from "../data/questions";
import type { QuizState } from "../types/quiz";
import { getHighScore } from "../utils/storage";

console.log(getHighScore());

export const initialState: QuizState = {
  status: QUIZ_STATUS.START,
  currentQuestionIndex: 0,
  score: 0,
  highScore: getHighScore(),
  selectedAnswerId: null,
  timeLeft: 30 * questions.length,
  isRevealing: false,
};
