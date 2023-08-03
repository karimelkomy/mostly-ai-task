import HomePage from "../pages/HomePage";
import { urls } from "../data/urls";

fixture`Bookmarks`.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Verify home page bookmarks", async (t) => {
  const homePage = new HomePage();

  await homePage.privacyModel.accept();

  await homePage.header.validatePlatformBookmark();
  await homePage.header.validateSyntheticDataBookmark();
  await homePage.header.validateResourcesBookmark();
  await homePage.header.validateCompanyBookmark();
  await homePage.header.validatePricingBookmark();
}).meta({
  customTest: "verify-home-page-bookmarks",
});
