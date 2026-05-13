import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { QuizScreen } from "./QuizScreen";
import { QUIZ_ACTION } from "../constants/quizAction";
import { playSound, sounds } from "../utils/sounds";
import { QUIZ_STATUS } from "../constants/quizStatus";

vi.mock("../utils/sounds", () => ({
  playSound: vi.fn(),
  sounds: {
    correct: "correct.mp3",
    wrong: "wrong.mp3",
  },
}));

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

const baseState = {
  currentQuestionIndex: 0,
  selectedAnswerId: null,
  timeLeft: 30,
  status: QUIZ_STATUS.PLAYING,
  score: 0,
  highScore: 0,
};

describe("QuizScreen", () => {
  it("renders question text", () => {
    render(<QuizScreen state={baseState} dispatch={vi.fn()} />);

    expect(screen.getByText("Test question?")).toBeInTheDocument();
  });

  it("dispatches NEXT_QUESTION on next click", async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    render(
      <QuizScreen
        state={{ ...baseState, selectedAnswerId: 1 }}
        dispatch={dispatch}
      />,
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    expect(dispatch).toHaveBeenCalledWith({
      type: QUIZ_ACTION.NEXT_QUESTION,
    });
  });

  it("disables next button when no answer selected", () => {
    render(<QuizScreen state={baseState} dispatch={vi.fn()} />);

    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
  });

  it("plays correct sound when answer is correct", async () => {
    const playSoundMock = vi.mocked(playSound);

    render(
      <QuizScreen
        state={{
          currentQuestionIndex: 0,
          selectedAnswerId: 1,
          timeLeft: 30,
          status: QUIZ_STATUS.PLAYING,
          score: 0,
          highScore: 0,
        }}
        dispatch={vi.fn()}
      />,
    );

    await waitFor(() => {
      expect(playSoundMock).toHaveBeenCalledWith(sounds.correct);
    });
  });

  it("plays wrong sound when answer is incorrect", () => {
    const playSoundMock = vi.mocked(playSound);

    render(
      <QuizScreen
        state={{
          ...baseState,
          selectedAnswerId: 2,
        }}
        dispatch={vi.fn()}
      />,
    );

    expect(playSoundMock).toHaveBeenCalledWith(sounds.wrong);
  });
});
