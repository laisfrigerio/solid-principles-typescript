import { IPasswordGenerationRule } from "../../types/rule";

export class RequireSpecialCharacterRule implements IPasswordGenerationRule {
  applyRule(password: string) {
    const characters: string[] = ["!", "@", "#", "$", "%", "&", "?"];
    const specialCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    return password + specialCharacter;
  }
}
