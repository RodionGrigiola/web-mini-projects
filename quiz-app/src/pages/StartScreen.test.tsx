import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StartScreen } from "./StartScreen";
import { QUIZ_ACTION } from "../constants/quizAction";

describe("StartScreen", () => {
  it("should render start button", () => {
    const dispatch = vi.fn();

    render(<StartScreen dispatch={dispatch} />);

    expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
  });

  it("should dispatch START_QUIZ on click", async () => {
    const user = userEvent.setup();
    const dispatch = vi.fn();

    render(<StartScreen dispatch={dispatch} />);

    await user.click(screen.getByRole("button", { name: /start/i }));

    expect(dispatch).toHaveBeenCalledWith({
      type: QUIZ_ACTION.START_QUIZ,
    });
  });
});
