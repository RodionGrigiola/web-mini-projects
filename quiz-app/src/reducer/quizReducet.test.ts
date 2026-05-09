import { quizReducer } from "./quizReducer";
import { QUIZ_ACTION } from "../constants/quizAction";
import { QUIZ_STATUS } from "../constants/quizStatus";
import { initialState } from "./initialState";

describe("Quiz Reducer", () => {
  it("should start quiz", () => {
    const state = initialState;

    const newState = quizReducer(state, {
      type: QUIZ_ACTION.START_QUIZ,
    });

    expect(newState.timeLeft).toEqual(300);
    expect(newState.status).toEqual(QUIZ_STATUS.PLAYING);
  });

  it("should increase score on correct answer", () => {
    const state = {
      ...initialState,
      status: QUIZ_STATUS.PLAYING,
    };

    const action = {
      type: QUIZ_ACTION.SELECT_ANSWER,
      payload: 1,
    };

    const newState = quizReducer(state, action);

    expect(newState.score).toEqual(10);
  });

  it("should not increase score on wrong answer", () => {
    const state = {
      ...initialState,
      status: QUIZ_STATUS.PLAYING,
    };

    const action = {
      type: QUIZ_ACTION.SELECT_ANSWER,
      payload: 2,
    };

    const newState = quizReducer(state, action);

    expect(newState.score).toEqual(0);
  });

  it("should move to next question", () => {
    const state = {
      ...initialState,
      status: QUIZ_STATUS.PLAYING,
    };

    const action = {
      type: QUIZ_ACTION.NEXT_QUESTION,
    };

    const newState = quizReducer(state, action);

    expect(newState.currentQuestionIndex).toEqual(
      state.currentQuestionIndex + 1,
    );
    expect(newState.selectedAnswerId).toBeNull();
  });

  it("should finish quiz on last question", () => {
    const state = {
      ...initialState,
      currentQuestionIndex: 4,
      score: 30,
    };

    const newState = quizReducer(state, {
      type: QUIZ_ACTION.NEXT_QUESTION,
    });

    expect(newState.status).toBe(QUIZ_STATUS.FINISHED);
  });

  it("should reset state", () => {
    const state = {
      ...initialState,
      currentQuestionIndex: 4,
      score: 30,
    };

    const newState = quizReducer(state, {
      type: QUIZ_ACTION.RESTART,
    });

    expect(newState.status).toBe(QUIZ_STATUS.START);
    expect(newState.score).toEqual(0);
    expect(newState.selectedAnswerId).toBeNull();
    expect(newState.currentQuestionIndex).toEqual(0);
  });
});
