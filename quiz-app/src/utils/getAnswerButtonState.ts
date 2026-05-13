type ButtonState = "default" | "correct" | "wrong";

type Params = {
  selectedAnswerId: number | null;
  answerId: number;
  correctAnswerId: number;
};

export function getAnswerButtonState({
  selectedAnswerId,
  answerId,
  correctAnswerId,
}: Params): ButtonState {
  if (selectedAnswerId === null) {
    return "default";
  }

  if (answerId === correctAnswerId) {
    return "correct";
  }

  if (selectedAnswerId === answerId) {
    return "wrong";
  }

  return "default";
}
