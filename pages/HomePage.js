import Header from "../components/Header";
import PrivacyModel from "../components/PrivacyModel";

export default class HomePage {
  constructor() {
    this.privacyModel = new PrivacyModel();
    this.header = new Header();
  }
}
