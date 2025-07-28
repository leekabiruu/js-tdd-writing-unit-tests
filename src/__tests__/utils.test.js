// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates total points (1 per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase letters", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });
});
