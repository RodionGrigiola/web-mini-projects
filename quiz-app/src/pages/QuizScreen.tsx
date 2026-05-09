import { AnswerButton } from "../components/AnswerButton";
import { QUIZ_ACTION } from "../constants/quizAction";
import { questions } from "../data/questions";
import type { QuizAction, QuizState } from "../types/quiz";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { useEffect } from "react";
import { playSound, sounds } from "../utils/sounds";
import { FaChartBar } from "react-icons/fa";
import { Timer } from "../components/Timer";

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
        total={questions.length}>
        <FaChartBar />
        Progress{" "}
      </ProgressBar>
      <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>

      <div className="flex flex-col gap-3">
        {currentQuestion.answers.map((answer) => {
          const isSelected = state.selectedAnswerId === answer.id;
          const isCorrect = answer.id === currentQuestion.correctAnswerId;

          let buttonState: "default" | "correct" | "wrong" = "default";

          if (state.selectedAnswerId !== null) {
            if (isCorrect) {
              buttonState = "correct";
            } else if (isSelected && !isCorrect) {
              buttonState = "wrong";
            }
          }

          return (
            <AnswerButton
              key={answer.id}
              text={answer.text}
              state={buttonState}
              disabled={state.selectedAnswerId !== null}
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
        className="rounded px-6 py-3"
        disabled={!state.selectedAnswerId}
        onClick={() =>
          dispatch({
            type: QUIZ_ACTION.NEXT_QUESTION,
          })
        }>
        Next
      </Button>

      <Timer timeLeft={state.timeLeft} />
    </div>
  );
}
