import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("should display correct percent", () => {
    render(<ProgressBar current={2} total={4} />);

    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  it("should set correct progress value", () => {
    render(<ProgressBar current={1} total={4} />);

    const bar = screen.getByRole("progressbar");

    expect(bar).toHaveAttribute("aria-valuenow", "1");
    expect(bar).toHaveAttribute("aria-valuemax", "4");
  });
});
