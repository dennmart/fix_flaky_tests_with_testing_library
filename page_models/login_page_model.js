import { getByLabelText, getByText } from "@testing-library/testcafe";

class LoginPageModel {
  constructor() {
    this.emailInput = getByLabelText("Email Address");
    this.passwordInput = getByLabelText("Password");
    this.submitButton = getByText("Log In");
    this.accountHeader = getByText("Your Account Information");
  }
}

export default new LoginPageModel();
