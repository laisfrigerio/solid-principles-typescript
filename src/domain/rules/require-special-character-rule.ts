import { PasswordGenerationRule } from "../../types/rule";

export class RequireSpecialCharacterRule implements PasswordGenerationRule {
  applyRule(password: string) {
    const characters: string[] = ["!", "@", "#", "$", "%", "&", "?"];
    const specialCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    return password + specialCharacter;
  }
}
