import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AnswerButton } from "./AnswerButton";
import { vi } from "vitest";

describe("AnswerButton", () => {
  it("should render text", () => {
    render(<AnswerButton text="React" onClick={() => {}} />);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("should call onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<AnswerButton text="React" onClick={onClick} />);

    await user.click(screen.getByText("React"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<AnswerButton text="React" onClick={onClick} disabled />);

    const button = screen.getByText("React");

    expect(button).toBeDisabled();

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should apply correct styles", () => {
    render(<AnswerButton text="React" onClick={() => {}} state="correct" />);

    const button = screen.getByText("React");

    expect(button).toHaveClass("bg-green-600");
  });

  it("should apply wrong styles", () => {
    render(<AnswerButton text="React" onClick={() => {}} state="wrong" />);

    const button = screen.getByText("React");

    expect(button).toHaveClass("bg-red-600");
  });
});
