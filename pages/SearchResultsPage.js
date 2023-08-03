import { sprintf } from "sprintf-js";
import Actions from "../components/Actions";

const searchResultText = '//h1[contains(., "%s")]';

export default class SearchResultsPage {
  constructor() {
    this.actions = new Actions();
  }

  async validateEmptySearchResult({ searchText }) {
    await this.actions.validateElementVisibility(
      sprintf(searchResultText, "Sorry, no results for:")
    );
    await this.actions.validateElementVisibility(
      sprintf(searchResultText, searchText)
    );
  }
}
