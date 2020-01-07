import { getByText } from "@testing-library/testcafe";

class HomePageModel {
  constructor() {
    this.subtitleHeader = getByText(
      "An API to fetch and save information about your favorite airports"
    );
  }
}

export default new HomePageModel();
