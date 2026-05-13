import { QUIZ_ACTION } from "../constants/quizAction";
import { questions } from "../data/questions";
import type { QuizAction, QuizState } from "../types/quiz";
import { getAnswerButtonState } from "../utils/getAnswerButtonState";
import { AnswerButton } from "./AnswerButton";

type Props = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export function AnswersList({ state, dispatch }: Props) {
  const currentQuestion = questions[state.currentQuestionIndex];

  return (
    <div className="flex flex-col gap-3">
      {currentQuestion.answers.map((answer) => {
        const buttonState = getAnswerButtonState({
          selectedAnswerId: state.selectedAnswerId,
          answerId: answer.id,
          correctAnswerId: currentQuestion.correctAnswerId,
        });

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
  );
}
