import { RequireSpecialCharacterRule } from "../../../src/domain/rules/require-special-character-rule";

describe("RequireSpecialCharacterRule", () => {
  it("should return ! character", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(0);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("")).toBe("!");
  });

  it("should return A1@ string", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(1);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("A1")).toBe("A1@");
  });

  it("should return 5# string", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(2);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("5")).toBe("5#");
  });

  it("should return a5Bcˆ!@$ string", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(3);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("a5Bcˆ!@")).toBe("a5Bcˆ!@$");
  });

  it("should return % character", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(4);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("")).toBe("%");
  });

  it("should return H1hc45@& string", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(5);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("H1hc45@")).toBe("H1hc45@&");
  });

  it("should return 1? character", () => {
    jest.spyOn(global.Math, "floor").mockReturnValue(6);
    const rule = new RequireSpecialCharacterRule();
    expect(rule.applyRule("1")).toBe("1?");
  });
});
