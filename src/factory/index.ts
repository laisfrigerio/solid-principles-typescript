import { RequireNumberRule } from "../domain/rules/require-number-rule";
import { RequireUpperCaseRule } from "../domain/rules/require-uppercase-rule";
import { RequireSpecialCharacterRule } from "../domain/rules/require-special-character-rule";
import { PasswordGeneratorOptions } from "../types/generator";
import { IPasswordGenerationRule } from "../types/rule";

const ruleClassMap: Record<string, new () => IPasswordGenerationRule> = {
  requireUpperCase: RequireUpperCaseRule,
  requireSpecialCharacter: RequireSpecialCharacterRule,
  requireNumber: RequireNumberRule,
};

export class RuleFactory {
  static createRules(
    options: PasswordGeneratorOptions
  ): IPasswordGenerationRule[] {
    const rules: IPasswordGenerationRule[] = [];

    for (const [option, ruleClass] of Object.entries(ruleClassMap)) {
      if (options[option]) {
        rules.push(new ruleClass());
      }
    }

    return rules;
  }
}
