export interface IPasswordGenerationRule {
  applyRule(password: string): string;
}
