import { PasswordGenerator } from "../../../src/domain/generator";

describe("PasswordGenerator", () => {
  it("should return a not empty string with 10 characters", () => {
    const password = PasswordGenerator.generatePassword({});
    expect(password.length).toBe(10);
  });

  it("should return a not empty string with 7 character", () => {
    const password = PasswordGenerator.generatePassword({ minLength: 7 });
    expect(password.length).toBe(7);
  });

  it("should return at least one uppercase character", () => {
    const password = PasswordGenerator.generatePassword({
      requireUpperCase: true,
    });
    expect(password).toMatch(/[A-Z]/);
  });

  it("should return at least one number character", () => {
    const password = PasswordGenerator.generatePassword({
      requireNumber: true,
    });
    expect(password).toMatch(/[0-9]/);
  });

  it("should return at least one special character", () => {
    const password = PasswordGenerator.generatePassword({
      requireSpecialCharacter: true,
    });
    expect(password).toMatch(/[^\!@#\$%&?]/);
  });

  it("should return at least one uppercase character, one number character and one special character", () => {
    const password = PasswordGenerator.generatePassword({
      requireUpperCase: true,
      requireNumber: true,
      requireSpecialCharacter: true,
    });
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[0-9]/);
    expect(password).toMatch(/[^\!@#\$%&?]/);
    expect(password.length).toBe(10);
  });
});
