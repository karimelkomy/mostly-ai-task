import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import { urls } from "../data/urls";

fixture`Search`.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Empty result search", async (t) => {
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();

  await homePage.privacyModel.accept();

  await homePage.header.search({ searchText: "sythetic" });

  await searchResultsPage.validateEmptySearchResult({ searchText: "sythetic" });
}).meta({
  customTest: "empty-result-search",
});
