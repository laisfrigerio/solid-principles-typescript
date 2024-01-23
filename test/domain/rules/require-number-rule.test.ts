import { RequireNumberRule } from "../../../src/domain/rules/require-number-rule";

describe("RequireNumberRule", () => {
  it("should return letter 0", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0);
    const rule = new RequireNumberRule();
    expect(rule.applyRule("")).toBe("0");
  });

  it("should return letter Ag35", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.53);
    const rule = new RequireNumberRule();
    expect(rule.applyRule("Ag3")).toBe("Ag35");
  });

  it("should return letter 129", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.9);
    const rule = new RequireNumberRule();
    expect(rule.applyRule("12")).toBe("129");
  });
});
