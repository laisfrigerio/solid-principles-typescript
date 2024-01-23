import { IPasswordGenerationRule } from "../../types/rule";

export class RequireNumberRule implements IPasswordGenerationRule {
  applyRule(password: string) {
    const number = Math.floor(Math.random() * 10);
    return password + number;
  }
}
