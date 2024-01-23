import { RequireNumberRule } from "../domain/rules/require-number-rule";
import { RequireUpperCaseRule } from "../domain/rules/require-uppercase-rule";
import { RequireSpecialCharacterRule } from "../domain/rules/require-special-character-rule";
import { PasswordGenerationOptions } from "../types/generator";
import { PasswordGenerationRule } from "../types/rule";

const ruleClassMap: Record<string, new () => PasswordGenerationRule> = {
  requireUpperCase: RequireUpperCaseRule,
  requireSpecialCharacter: RequireSpecialCharacterRule,
  requireNumber: RequireNumberRule,
};

export class RuleFactory {
  static createRules(
    options: PasswordGenerationOptions
  ): PasswordGenerationRule[] {
    const rules: PasswordGenerationRule[] = [];

    for (const [option, ruleClass] of Object.entries(ruleClassMap)) {
      if (options[option]) {
        rules.push(new ruleClass());
      }
    }

    return rules;
  }
}
