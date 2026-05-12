import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

import { useQuizTimer } from "./useQuizTimer";
import { QUIZ_ACTION } from "../constants/quizAction";
import { QUIZ_STATUS } from "../constants/quizStatus";

describe("useQuizTimer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("dispatches TICK every second when quiz is playing", () => {
    const dispatch = vi.fn();

    renderHook(() =>
      useQuizTimer({
        status: QUIZ_STATUS.PLAYING,
        dispatch,
        timeLeft: 30,
      }),
    );

    vi.advanceTimersByTime(1000);

    expect(dispatch).toHaveBeenCalledWith({
      type: QUIZ_ACTION.TICK,
    });

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("does not start timer when quiz is not playing", () => {
    const dispatch = vi.fn();

    renderHook(() =>
      useQuizTimer({
        status: QUIZ_STATUS.FINISHED,
        dispatch,
        timeLeft: 30,
      }),
    );

    vi.advanceTimersByTime(3000);

    expect(dispatch).not.toHaveBeenCalled();
  });

  it("clears interval on unmount", () => {
    const dispatch = vi.fn();
    const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");

    const { unmount } = renderHook(() =>
      useQuizTimer({
        status: QUIZ_STATUS.PLAYING,
        dispatch,
        timeLeft: 30,
      }),
    );

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
