import { sprintf } from "sprintf-js";
import Actions from "./core/Actions";

const bookmarksText = '//nav//span[text()="%s"]';
const searchButton = '//button[@aria-label="Open search"]';
const searchInput = '//input[@type="search"]';
const contactButton = '//a/div[text()="Contact"]';

export default class Header {
  constructor() {
    this.actions = new Actions();
  }

  async validatePlatformBookmark() {
    await this.actions.validateElementVisibility(
      sprintf(bookmarksText, "Platform")
    );
  }

  async validateSyntheticDataBookmark() {
    await this.actions.validateElementVisibility(
      sprintf(bookmarksText, "Synthetic Data")
    );
  }

  async validateResourcesBookmark() {
    await this.actions.validateElementVisibility(
      sprintf(bookmarksText, "Resources")
    );
  }

  async validateCompanyBookmark() {
    await this.actions.validateElementVisibility(
      sprintf(bookmarksText, "Company")
    );
  }

  async validatePricingBookmark() {
    await this.actions.validateElementVisibility(
      sprintf(bookmarksText, "Pricing")
    );
  }

  async openContactPage() {
    await this.actions.hover(sprintf(bookmarksText, "Company"));
    await this.actions.click(contactButton);
  }

  async search({ searchText }) {
    await this.actions.click(searchButton);
    await this.actions.fill(searchInput, searchText);
    await this.actions.pressEnter();
  }
}
