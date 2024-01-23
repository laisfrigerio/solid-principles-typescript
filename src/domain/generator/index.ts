import { RuleFactory } from "../../factory";
import { PasswordGeneratorOptions } from "../../types/generator";
import { IPasswordGenerationRule } from "../../types/rule";

export class PasswordGenerator {
  static generatePassword(options: PasswordGeneratorOptions): string {
    let password: string = "";

    const rules: IPasswordGenerationRule[] = RuleFactory.createRules(options);

    for (const rule of rules) {
      password = rule.applyRule(password);
    }

    password = this.ensureMinLength(password, options.minLength || 10);

    return password;
  }

  private static ensureMinLength(password: string, minLength: number): string {
    while (password.length < minLength) {
      const randomChar = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      );
      password += randomChar;
    }

    return password;
  }
}
