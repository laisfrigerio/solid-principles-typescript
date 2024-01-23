# Solid Principles wih Typescript

Implementing SOLID principles with TypeScript in a Password Generator Project.

## SOLID

- **S**ingle Responsibility Principle (SRP)
- **O**pen/Closed Principle (OCP)
- **L**iskov Substitution Principle (LSP)
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

### Single Responsibility Principle

Every class should have a single responsibility. A class should have one, and only one, reason to change.

### Open/Closed Principle

You should be able to extend a classes behavior, without modifying it. Software entities should be open for extension, but closed for modification.

### Liskov Substitution Principle

Derived classes must be substitutable for their base classes. Functions that use references to base classes must be able to use objects of derived classes without knowing it.

### Interface Segregation Principle

Make fine grained interfaces that are client specific. Clients should not be forced to depend on interfaces they do not use.

### Dependency Inversion Principle

Depend on abstractions, not on concretions. High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

## Solution

We can generate a password based on the following rules:

- Require a minimum of characters;
- Require at least one upper case character;
- Require at least one number character;
- Require at least one special character.

### The usage of SOLID principles

1. We created a class for each rule under the `./src/domain/rules` folder to ensure the Single Responsibility Principle (SRP).
2. We created the `RuleFactory` class to be responsible for creating a list of rules based on user options, following again the SRP.
3. We created the `RuleFactory` class to be open for extension but closed for modification. We can easily add new rules by extending the `ruleClassMap` without modifying existing code (OCP).
4. Each rule under the `./src/domain/rules` folder implements the `IPasswordGenerationRule` interface, ensuring that they are substitutable for the base type without altering the correctness of the program (LSP).
5. The `IPasswordGenerationRule` interface follows the Interface Segregation Principle by providing a specific method (`applyRule`) relevant to the implementing rule classes. The Rule class (e.g., RequireNumberRule, RequireSpecialCharacterRule, RequireUpperCaseRule) are not forced to depend on unnecessary methods (ISP).
6. The `RuleFactory` class depends on the abstraction provided by the `IPasswordGenerationRule` interface, ensuring that high-level modules depend on abstractions rather than concrete implementations.

## 🛠️ Stack

- nodejs `18.12.1`
- typescript `5.3.3`
- jest `^29.7.0`
- yarn `1.22.19`

## :gem: Run tests

```
    yarn install
    yarn test
```

## Contributions

Feel free to contribute and share your ideas. Open an issue and/or a Pull Request. Let's talk about SOLID principles and implementing the best practices!

## 👩 Author

| [<img src="https://avatars.githubusercontent.com/u/20709086?v=4" width="100px;" alt="Lais Frigério"/><br /><sub><b>@laisfrigerio</b></sub>](https://instagram.com/laisfrigerio/)<br /> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details
