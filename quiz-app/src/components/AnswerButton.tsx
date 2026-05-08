type Props = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  state?: "default" | "correct" | "wrong";
};

export function AnswerButton({
  text,
  onClick,
  disabled,
  state = "default",
}: Props) {
  const base = "w-full text-left rounded px-4 py-3 transition";

  const styles = {
    default: "bg-slate-700 hover:bg-slate-600",
    correct: "bg-green-600",
    wrong: "bg-red-600",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${styles[state]} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}>
      {text}
    </button>
  );
}
