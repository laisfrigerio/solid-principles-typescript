import { PasswordGenerationRule } from "../../types/rule";

export class RequireNumberRule implements PasswordGenerationRule {
  applyRule(password: string) {
    const number = Math.floor(Math.random() * 10);
    return password + number;
  }
}
