import { questions } from "../data/questions";
import type { QuizAction, QuizState } from "../types/quiz";

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return {
        ...state,
        status: "playing",
      };

    case "SELECT_ANSWER": {
      if (state.selectedAnswerId !== null) return state;

      const currentQuestion = questions[state.currentQuestionIndex];
      const isCorrect = action.payload === currentQuestion.id;

      return {
        ...state,
        selectedAnswerId: action.payload,
        score: isCorrect ? state.score + currentQuestion.points : state.score,
      };
    }

    case "NEXT_QUESTION": {
      const lastQuestion = state.currentQuestionIndex === questions.length - 1;
      if (lastQuestion) {
        return {
          ...state,
          status: "finished",
          highScore: Math.max(state.highScore, state.score),
        };
      }

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswerId: null,
      };
    }
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
