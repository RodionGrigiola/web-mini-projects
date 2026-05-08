import { AnswerButton } from "../components/AnswerButton";
import { QUIZ_ACTION } from "../constants/quizAction";
import { questions } from "../data/questions";
import type { QuizAction, QuizState } from "../types/quiz";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { formatTime } from "../utils/formatTime";
import { useEffect } from "react";
import { playSound, sounds } from "../utils/sounds";

type Props = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export function QuizScreen({ state, dispatch }: Props) {
  const currentQuestion = questions[state.currentQuestionIndex];

  useEffect(() => {
    if (!state.selectedAnswerId) return;

    const current = questions[state.currentQuestionIndex];
    const isCorrect = state.selectedAnswerId === current.correctAnswerId;

    if (isCorrect) {
      playSound(sounds.correct);
    } else {
      playSound(sounds.wrong);
    }
  }, [state.selectedAnswerId, state.currentQuestionIndex]);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-8 min-h-[400px] justify-between">
      <ProgressBar
        current={state.currentQuestionIndex + 1}
        total={questions.length}
      />
      <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>

      <div className="flex flex-col gap-3">
        {currentQuestion.answers.map((answer) => {
          const isSelected = answer.id === state.selectedAnswerId;

          return (
            <AnswerButton
              key={answer.id}
              text={answer.text}
              disabled={state.selectedAnswerId !== null}
              state={
                !state.selectedAnswerId
                  ? "default"
                  : answer.id === currentQuestion.correctAnswerId
                    ? "correct"
                    : isSelected
                      ? "wrong"
                      : "default"
              }
              onClick={() =>
                dispatch({
                  type: QUIZ_ACTION.SELECT_ANSWER,
                  payload: answer.id,
                })
              }
            />
          );
        })}
      </div>

      <Button
        className="rounded bg-green-600 px-6 py-3"
        onClick={() =>
          dispatch({
            type: QUIZ_ACTION.NEXT_QUESTION,
          })
        }>
        Next
      </Button>

      <div className="flex self-end items-center">
        <p
          className={`text-sm ${
            state.timeLeft <= 10
              ? "text-red-500 animate-pulse"
              : "text-amber-100"
          }`}>
          Time: {formatTime(state.timeLeft)}
        </p>
      </div>
    </div>
  );
}
