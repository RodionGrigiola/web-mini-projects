import { useEffect } from "react";
import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction, QuizState } from "../types/quiz";
import { Button } from "../components/Button";
import { playSound, sounds } from "../utils/sounds";
import { QUIZ_STATUS } from "../constants/quizStatus";
import { ScreenWrapper } from "../components/ScreenWrapper";
import { launchConfetti } from "../utils/confetti";
import { FaRedo, FaStar, FaTrophy } from "react-icons/fa";

type Props = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export function ResultScreen({ state, dispatch }: Props) {
  useEffect(() => {
    if (state.status !== QUIZ_STATUS.FINISHED) return;

    const isWin = state.score >= state.highScore;

    if (isWin) {
      playSound(sounds.victory);
    } else {
      playSound(sounds.gameover);
    }
  }, [state.status, state.highScore, state.score]);

  useEffect(() => {
    if (state.status !== QUIZ_STATUS.FINISHED) return;

    const isWin = state.score >= state.highScore;

    if (isWin) {
      launchConfetti();
    }
  }, [state.status, state.score, state.highScore]);

  const isBest = state.score >= state.highScore;

  return (
    <ScreenWrapper>
      <div className="text-center space-y-2">
        <FaTrophy className="text-yellow-400" />

        <h1 className="text-4xl font-bold">Results</h1>
        <p className="text-slate-400">Quiz completed</p>
      </div>

      <div className="w-full flex flex-col gap-3 text-center">
        <div className="bg-slate-700/50 rounded-lg p-4">
          <FaStar />

          <p className="text-sm text-slate-400">Your Score</p>
          <p className="text-2xl font-bold">{state.score}</p>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4">
          <FaRedo />

          <p className="text-sm text-slate-400">Best Score</p>
          <p className="text-2xl font-bold">{state.highScore}</p>
        </div>

        {isBest && (
          <p className="text-green-400 text-sm animate-pulse">
            🎉 New Best Score!
          </p>
        )}
      </div>

      <Button
        variant="secondary"
        className="w-full"
        onClick={() => dispatch({ type: QUIZ_ACTION.RESTART })}>
        Play Again
      </Button>
    </ScreenWrapper>
  );
}
