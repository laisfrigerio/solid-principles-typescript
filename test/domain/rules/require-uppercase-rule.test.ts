import { RequireUpperCaseRule } from "../../../src/domain/rules/require-uppercase-rule";

describe("RequireUpperCaseRule", () => {
  it("should return letter A", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0);
    const rule = new RequireUpperCaseRule();
    expect(rule.applyRule("")).toBe("A");
  });

  it("should return letter 12E", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.16);
    const rule = new RequireUpperCaseRule();
    expect(rule.applyRule("12")).toBe("12E");
  });
});
