import type { QuizAction, QuizState } from "../types/quiz";

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return {
        ...state,
        status: "playing",
      };

    case "SELECT_ANSWER":
      return state;

    case "NEXT_QUESTION":
      return state;

    case "RESTART":
      return {
        ...state,
        status: "start",
        currentQuestionIndex: 0,
        score: 0,
        selectedAnswerId: null,
      };

    default:
      return state;
  }
}
