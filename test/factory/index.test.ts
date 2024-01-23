import { RequireNumberRule } from "../../src/domain/rules/require-number-rule";
import { RequireUpperCaseRule } from "../../src/domain/rules/require-uppercase-rule";
import { RequireSpecialCharacterRule } from "../../src/domain/rules/require-special-character-rule";
import { RuleFactory } from "../../src/factory";

describe("RuleFactory", () => {
  it("should return an empty array when empty options", () => {
    const rules = RuleFactory.createRules({});
    expect(rules).toStrictEqual([]);
  });

  describe("when only one option is true, should return an array with 1 rule", () => {
    it("should return an array with 1 rule related to Number", () => {
      const rules = RuleFactory.createRules({ requireNumber: true });
      expect(rules).toStrictEqual([new RequireNumberRule()]);
    });

    it("should return an array with 1 rule related to UpperCase", () => {
      const rules = RuleFactory.createRules({ requireUpperCase: true });
      expect(rules).toStrictEqual([new RequireUpperCaseRule()]);
    });

    it("should return an array with 1 rule related to Special Character", () => {
      const rules = RuleFactory.createRules({ requireSpecialCharacter: true });
      expect(rules).toStrictEqual([new RequireSpecialCharacterRule()]);
    });
  });

  describe("when two options are true, should return an array with 2 rules", () => {
    it("should return an array with 2 rules related to UpperCase and Number", () => {
      const rules = RuleFactory.createRules({
        requireNumber: true,
        requireUpperCase: true,
      });
      expect(rules).toStrictEqual([
        new RequireUpperCaseRule(),
        new RequireNumberRule(),
      ]);
    });

    it("should return an array with 2 rules related to UpperCase and Special Character", () => {
      const rules = RuleFactory.createRules({
        requireSpecialCharacter: true,
        requireUpperCase: true,
      });
      expect(rules).toStrictEqual([
        new RequireUpperCaseRule(),
        new RequireSpecialCharacterRule(),
      ]);
    });

    it("should return an array with 2 rules related to Special Character and Number", () => {
      const rules = RuleFactory.createRules({
        requireSpecialCharacter: true,
        requireNumber: true,
      });
      expect(rules).toStrictEqual([
        new RequireSpecialCharacterRule(),
        new RequireNumberRule(),
      ]);
    });
  });

  it("when three options are true, should return an array with 3 rules", () => {
    const rules = RuleFactory.createRules({
      requireNumber: true,
      requireUpperCase: true,
      requireSpecialCharacter: true,
    });
    expect(rules).toStrictEqual([
      new RequireUpperCaseRule(),
      new RequireSpecialCharacterRule(),
      new RequireNumberRule(),
    ]);
  });
});
