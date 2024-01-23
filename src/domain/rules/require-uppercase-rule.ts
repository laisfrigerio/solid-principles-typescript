import { PasswordGenerationRule } from "../../types/rule";

export class RequireUpperCaseRule implements PasswordGenerationRule {
  applyRule(password: string): string {
    const upperCaseLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    return password + upperCaseLetter;
  }
}
