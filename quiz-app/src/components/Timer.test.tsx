import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Timer } from "./Timer";

describe("Timer", () => {
  it("renders formatted time", () => {
    render(<Timer timeLeft={61} />);

    expect(screen.getByText("01:01")).toBeInTheDocument();
  });

  it("shows warning styles when time is 10 or below", () => {
    render(<Timer timeLeft={9} />);

    const timerText = screen.getByText("00:09");

    expect(timerText).toHaveClass("text-red-500");
    expect(timerText).toHaveClass("animate-pulse");
  });

  it("does not show warning styles above 10 seconds", () => {
    render(<Timer timeLeft={30} />);

    const timerText = screen.getByText("00:30");
    console.log(timerText);

    expect(timerText).toHaveClass("text-amber-100");
    expect(timerText).not.toHaveClass("text-red-500");
  });
});
