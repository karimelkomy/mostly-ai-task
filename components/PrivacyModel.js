import Actions from "./core/Actions";
import { checkElementVisibility } from "../utilities/helpers";

export default class PrivacyModel extends Actions {
  constructor() {
    super();
    this.logoText = '//span[text()="Smarter"]';
    this.acceptButton = '//a[contains(text(), "ACCEPT")]';
  }

  async accept() {
    if (await checkElementVisibility(this.acceptButton)) {
      await this.click(this.acceptButton);
    }
  }
}
