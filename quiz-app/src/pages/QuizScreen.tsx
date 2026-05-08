import { QUIZ_ACTION } from "../constants/quizAction";
import { questions } from "../data/questions";
import type { QuizAction, QuizState } from "../types/quiz";

type Props = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export function QuizScreen({ state, dispatch }: Props) {
  const currentQuestion = questions[state.currentQuestionIndex];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>

      <div className="flex flex-col gap-3">
        {currentQuestion.answers.map((answer) => (
          <button
            key={answer.id}
            className="rounded bg-slate-700 px-4 py-3"
            onClick={() =>
              dispatch({
                type: QUIZ_ACTION.SELECT_ANSWER,
                payload: answer.id,
              })
            }>
            {answer.text}
          </button>
        ))}
      </div>

      <button
        className="rounded bg-green-600 px-6 py-3"
        onClick={() =>
          dispatch({
            type: QUIZ_ACTION.NEXT_QUESTION,
          })
        }>
        Next
      </button>
    </div>
  );
}
