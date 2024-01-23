import { IPasswordGenerationRule } from "../../types/rule";

export class RequireUpperCaseRule implements IPasswordGenerationRule {
  applyRule(password: string): string {
    const upperCaseLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    return password + upperCaseLetter;
  }
}
