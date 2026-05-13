import { describe, it, expect } from "vitest";
import { getAnswerButtonState } from "./getAnswerButtonState";

describe("getAnswerButtonState", () => {
  it("returns default when no answer selected", () => {
    const result = getAnswerButtonState({
      selectedAnswerId: null,
      answerId: 1,
      correctAnswerId: 1,
    });

    expect(result).toBe("default");
  });

  it("returns correct when answer is correct", () => {
    const result = getAnswerButtonState({
      selectedAnswerId: 1,
      answerId: 1,
      correctAnswerId: 1,
    });

    expect(result).toBe("correct");
  });

  it("returns wrong when selected answer is incorrect", () => {
    const result = getAnswerButtonState({
      selectedAnswerId: 2,
      answerId: 2,
      correctAnswerId: 1,
    });

    expect(result).toBe("wrong");
  });

  it("returns default for non-selected wrong answers", () => {
    const result = getAnswerButtonState({
      selectedAnswerId: 2,
      answerId: 3,
      correctAnswerId: 1,
    });

    expect(result).toBe("default");
  });
});
