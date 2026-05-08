export type QuizStatus = "start" | "playing" | "finished";

export type QuizState = {
  status: QuizStatus;
  currentQuestionIndex: number;
  score: number;
  highScore: number;
  selectedAnswerId: number | null;
};

export type QuizAction =
  | { type: "START" }
  | { type: "SELECT_ANSWER"; payload: number }
  | { type: "NEXT_QUESTION" }
  | { type: "RESTART" };
