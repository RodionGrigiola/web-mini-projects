import { describe, expect, it } from "vitest";
import { formatTime } from "./formatTime";

describe("formatTime", () => {
  it("formats full minutes correctly", () => {
    expect(formatTime(300)).toBe("05:00");
  });

  it("formats minutes and seconds correctly", () => {
    expect(formatTime(61)).toBe("01:01");
  });

  it("pads single digit seconds", () => {
    expect(formatTime(9)).toBe("00:09");
  });

  it("formats zero correctly", () => {
    expect(formatTime(0)).toBe("00:00");
  });

  it("formats large values correctly", () => {
    expect(formatTime(3599)).toBe("59:59");
  });
});
