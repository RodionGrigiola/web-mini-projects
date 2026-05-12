import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);

    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("fires onClick handler", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click</Button>);

    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies primary variant styles by default", () => {
    render(<Button>Primary</Button>);

    expect(screen.getByRole("button")).toHaveClass("bg-blue-500");
  });

  it("applies secondary variant styles", () => {
    render(<Button variant="secondary">Secondary</Button>);

    expect(screen.getByRole("button")).toHaveClass("bg-slate-700");
  });

  it("applies danger variant styles", () => {
    render(<Button variant="danger">Danger</Button>);

    expect(screen.getByRole("button")).toHaveClass("bg-red-500");
  });

  it("applies disabled styles", () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole("button")).toHaveClass("opacity-50");
    expect(screen.getByRole("button")).toHaveClass("cursor-not-allowed");
  });

  it("merges custom className", () => {
    render(<Button className="custom-class">Custom</Button>);

    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
