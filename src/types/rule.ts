export interface PasswordGenerationRule {
  applyRule(password: string): string;
}
