import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { QUIZ_ACTION } from "../constants/quizAction";
import { QUIZ_STATUS } from "../constants/quizStatus";
import { AnswersList } from "./AnswerList";

const baseState = {
  currentQuestionIndex: 0,
  selectedAnswerId: null,
  timeLeft: 30,
  status: QUIZ_STATUS.PLAYING,
  score: 0,
  highScore: 0,
};

vi.mock("../data/questions", () => ({
  questions: [
    {
      id: 1,
      question: "Test question?",
      answers: [
        { id: 1, text: "Correct" },
        { id: 2, text: "Wrong" },
      ],
      correctAnswerId: 1,
      points: 10,
    },
  ],
}));

describe("AnswersList", () => {
  it("renders answer buttons", () => {
    render(<AnswersList state={baseState} dispatch={vi.fn()} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBeGreaterThan(1);
  });

  it("dispatches SELECT_ANSWER on answer click", async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    render(<AnswersList state={baseState} dispatch={dispatch} />);

    const correctAnswer = screen.getByText("Correct");

    await user.click(correctAnswer);

    expect(dispatch).toHaveBeenCalledWith({
      type: QUIZ_ACTION.SELECT_ANSWER,
      payload: 1,
    });
  });
});
