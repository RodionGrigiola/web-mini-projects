import { describe, it, expect, beforeEach, vi } from "vitest";
import { getHighScore, setHighScore } from "./storage";

const KEY = "quiz_high_score";

describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("returns 0 when no high score exists", () => {
    expect(getHighScore()).toBe(0);
  });

  it("returns stored high score", () => {
    localStorage.setItem(KEY, JSON.stringify(55));

    expect(getHighScore()).toBe(55);
  });

  it("saves high score to localStorage", () => {
    setHighScore(99);

    expect(localStorage.getItem(KEY)).toBe("99");
  });

  it("stores value as JSON string", () => {
    setHighScore(7);

    expect(localStorage.getItem(KEY)).toBe(JSON.stringify(7));
  });
});
