import Actions from "../components/core/Actions";

const youText = '//span[text()="you"]';
const firstNameInput = '//input[@name="firstname"]';
const lastNameInput = '//input[@name="lastname"]';
const emailInput = '//input[@name="email"]';
const phoneInput = '//input[@name="mobilephone"]';
const companyInput = '//input[@name="company"]';
const messageInput = '//textarea[@name="message"]';
const legalCheckbox =
  '//input[@type="checkbox" and contains(@id, "LEGAL_CONSENT")]';
const sendMessageButton = '//input[@value="SEND MESSAGE"]';

export default class ContactPage {
  constructor() {
    this.actions = new Actions();
  }

  async hoverSendButton() {
    await this.actions.hover(sendMessageButton);
  }

  async fillContactForm({ contactDetails }) {
    const { firstName, lastName, email, phone, company, message } =
      contactDetails;

    await this.actions.click(youText);
    await this.actions.fill(firstNameInput, firstName);
    await this.actions.fill(lastNameInput, lastName);
    await this.actions.fill(emailInput, email);
    await this.actions.fill(phoneInput, phone);
    await this.actions.fill(companyInput, company);
    await this.actions.fill(messageInput, message);
    await this.actions.click(legalCheckbox);
  }
}
