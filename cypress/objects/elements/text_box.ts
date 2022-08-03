export class TextBox {
  get userForm() {
    return cy.get('#userForm');
  }

  getUrlLink(name: string) {
    return this.userForm.find(`#${name}`);
  }
  get userName() {
    return this.userForm.find('#userName');
  }
  get userEmail() {
    return this.userForm.find('#userEmail');
  }
  get currentAddress() {
    return this.userForm.find('#currentAddress');
  }
  get permanentAddress() {
    return this.userForm.find('#permanentAddress');
  }
  get submitButton() {
    return this.userForm.find('.btn-primary');
  }

  putDataIntoUserForm(link: string, text: string) {
    return this.getUrlLink(link).type(text);
  }

  submitUserForm() {
    return this.submitButton.click();
  }
}
