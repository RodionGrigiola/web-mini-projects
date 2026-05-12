import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { ResultScreen } from "./ResultScreen";
import { QUIZ_STATUS } from "../constants/quizStatus";
import { QUIZ_ACTION } from "../constants/quizAction";
import { playSound, sounds } from "../utils/sounds";
import { launchConfetti } from "../utils/confetti";

vi.mock("../utils/sounds", () => ({
  playSound: vi.fn(),
  sounds: {
    victory: "victory.mp3",
    gameover: "gameover.mp3",
  },
}));

vi.mock("../utils/confetti", () => ({
  launchConfetti: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe("ResultScreen", () => {
  it("renders score and high score", () => {
    render(
      <ResultScreen
        state={{
          status: QUIZ_STATUS.FINISHED,
          score: 7,
          highScore: 10,
          currentQuestionIndex: 0,
          selectedAnswerId: null,
          timeLeft: 0,
        }}
        dispatch={vi.fn()}
      />,
    );

    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("shows new best score message when score >= highScore", () => {
    render(
      <ResultScreen
        state={{
          status: QUIZ_STATUS.FINISHED,
          score: 10,
          highScore: 5,
          currentQuestionIndex: 0,
          selectedAnswerId: null,
          timeLeft: 0,
        }}
        dispatch={vi.fn()}
      />,
    );

    expect(screen.getByText(/new best score/i)).toBeInTheDocument();
  });

  it("does not show best score message when score is lower", () => {
    render(
      <ResultScreen
        state={{
          status: QUIZ_STATUS.FINISHED,
          score: 3,
          highScore: 10,
          currentQuestionIndex: 0,
          selectedAnswerId: null,
          timeLeft: 0,
        }}
        dispatch={vi.fn()}
      />,
    );

    expect(screen.queryByText(/new best score/i)).not.toBeInTheDocument();
  });

  it("dispatches RESTART on button click", async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    render(
      <ResultScreen
        state={{
          status: QUIZ_STATUS.FINISHED,
          score: 5,
          highScore: 10,
          currentQuestionIndex: 0,
          selectedAnswerId: null,
          timeLeft: 0,
        }}
        dispatch={dispatch}
      />,
    );

    await user.click(screen.getByRole("button", { name: /play again/i }));

    expect(dispatch).toHaveBeenCalledWith({
      type: QUIZ_ACTION.RESTART,
    });
  });

  it("plays victory sound and confetti on win", () => {
    const playSoundMock = vi.mocked(playSound);
    const confettiMock = vi.mocked(launchConfetti);

    render(
      <ResultScreen
        state={{
          status: QUIZ_STATUS.FINISHED,
          score: 10,
          highScore: 5,
          currentQuestionIndex: 0,
          selectedAnswerId: null,
          timeLeft: 0,
        }}
        dispatch={vi.fn()}
      />,
    );

    expect(playSoundMock).toHaveBeenCalledWith(sounds.victory);
    expect(confettiMock).toHaveBeenCalledTimes(1);
  });

  it("plays gameover sound and no confetti on loss", () => {
    const playSoundMock = vi.mocked(playSound);
    const confettiMock = vi.mocked(launchConfetti);

    render(
      <ResultScreen
        state={{
          status: QUIZ_STATUS.FINISHED,
          score: 3,
          highScore: 10,
          currentQuestionIndex: 0,
          selectedAnswerId: null,
          timeLeft: 0,
        }}
        dispatch={vi.fn()}
      />,
    );

    expect(playSoundMock).toHaveBeenCalledWith(sounds.gameover);
    expect(confettiMock).not.toHaveBeenCalled();
  });
});
