import { QUIZ_ACTION } from "../constants/quizAction";
import { QUIZ_STATUS } from "../constants/quizStatus";
import { questions } from "../data/questions";
import type { QuizAction, QuizState } from "../types/quiz";
import { setHighScore } from "../utils/storage";

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case QUIZ_ACTION.START_QUIZ:
      return {
        ...state,
        status: QUIZ_STATUS.PLAYING,
      };

    case QUIZ_ACTION.SELECT_ANSWER: {
      if (state.selectedAnswerId !== null) return state;

      const currentQuestion = questions[state.currentQuestionIndex];
      const isCorrect = action.payload === currentQuestion.correctAnswerId;

      return {
        ...state,
        selectedAnswerId: action.payload,
        score: isCorrect ? state.score + currentQuestion.points : state.score,
      };
    }

    case QUIZ_ACTION.NEXT_QUESTION: {
      const lastQuestion = state.currentQuestionIndex === questions.length - 1;

      if (lastQuestion) {
        const newHigh = Math.max(state.highScore, state.score);
        setHighScore(newHigh);

        return {
          ...state,
          status: QUIZ_STATUS.FINISHED,
          highScore: Math.max(state.highScore, state.score),
        };
      }

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswerId: null,
      };
    }

    case QUIZ_ACTION.TICK: {
      const newTime = state.timeLeft - 1;

      if (newTime <= 0) {
        return {
          ...state,
          timeLeft: 0,
          status: QUIZ_STATUS.FINISHED,
        };
      }

      return {
        ...state,
        timeLeft: newTime,
      };
    }

    case QUIZ_ACTION.RESTART:
      return {
        ...state,
        status: QUIZ_STATUS.START,
        currentQuestionIndex: 0,
        score: 0,
        selectedAnswerId: null,
      };

    default:
      return state;
  }
}
