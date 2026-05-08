import type { QuizState } from "../types/quiz";

export const initialState: QuizState = {
  status: "start",
  currentQuestionIndex: 0,
  score: 0,
  highScore: 0,
  selectedAnswerId: null,
};
