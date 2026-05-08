import { QUIZ_ACTION } from "../constants/quizAction";
import type { QuizAction, QuizState } from "../types/quiz";
import { Button } from "../components/Button";
import { playSound, sounds } from "../utils/sounds";
import { QUIZ_STATUS } from "../constants/quizStatus";
import { useEffect } from "react";

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

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-3xl font-bold">Finished!</h2>

      <p>Your score: {state.score}</p>
      <p>High score: {state.highScore}</p>

      <Button
        variant="secondary"
        onClick={() => dispatch({ type: QUIZ_ACTION.RESTART })}>
        Restart
      </Button>
    </div>
  );
}
