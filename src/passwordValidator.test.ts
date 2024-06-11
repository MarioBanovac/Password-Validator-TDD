import passwordValidator from "./passwordValidator";

describe("passwordValidator", () => {
  test("shouldReturnBooleanProperty_whenStringPassed", () => {
    let validationResult = passwordValidator("sample test");
    expect(validationResult).toHaveProperty("valid", false);
    validationResult = passwordValidator("MyPassword123$");
    expect(validationResult).toHaveProperty("valid", true);
  });

  test("shouldReturnError_whenPasswordHasLessThanTwoNumbers", () => {
    const validationResult = passwordValidator("myPassword1$");
    expect(validationResult.error).toContain(
      "The password must contain at least 2 numbers"
    );
  });

  test("shouldReturnError_whenPasswordHasLessThanEightCharacters", () => {
    const validationResult = passwordValidator("123456");
    expect(validationResult.error).toContain(
      "Password must be at least 8 characters"
    );
  });

  test("shouldReturnError_whenNoCapitalLetter", () => {
    const validationResult = passwordValidator("mypassword123");
    expect(validationResult.error).toContain(
      "Password must contain at least one capital letter"
    );
  });

  test("shouldReturnError_whenNoSpecialCharacter", () => {
    const validationResult = passwordValidator("Mypassword123");
    expect(validationResult.error).toContain(
      "Password must contain at least one special character"
    );
  });

  test("shouldConcatenateMultipleErrors_whenMultipleErrorsPresent", () => {
    const validationResult = passwordValidator("somepas");
    expect(validationResult.error).toContain(
      "The password must contain at least 2 numbers\nPassword must be at least 8 characters\nPassword must contain at least one capital letter\nPassword must contain at least one special character"
    );
  });
});
