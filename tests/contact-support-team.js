import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import { urls } from "../data/urls";
import { contactDetails } from "../data/contactDetails";

fixture`Contact`.page(urls.home).beforeEach(async (t) => {
  await t.setNativeDialogHandler(() => true);
});

test("Contact support team", async (t) => {
  const homePage = new HomePage();
  const contactPage = new ContactPage();

  await homePage.privacyModel.accept();

  await homePage.header.openContactPage();

  await contactPage.fillContactForm({ contactDetails });
  await contactPage.hoverSendButton();
}).meta({
  customTest: "contact-support-team",
});
