export class WebTables {
  get webTablesWrapper() {
    return cy.get('.web-tables-wrapper');
  }
  getElementOperation(operation: string, number: string) {
    return this.webTablesWrapper.find(`#${operation}-record-${number}`);
  }
  get userformEdit() {
    return cy.get('.modal-content');
  }
  get firstNameEdit() {
    return this.userformEdit.find('#firstName');
  }
  get lastNameEdit() {
    return this.userformEdit.find('#lastName');
  }
  get emailEdit() {
    return this.userformEdit.find('#userEmail');
  }
  get ageEdit() {
    return this.userformEdit.find('#age');
  }
  get salayEdit() {
    return this.userformEdit.find('#salary');
  }
  get departmentEdit() {
    return this.userformEdit.find('#department');
  }

  getOneField(name: string) {
    return this.userformEdit.find(`#${name}`);
  }

  get submitButton() {
    return this.userformEdit.find('#submit');
  }
  get addUserButton() {
    return this.webTablesWrapper.find('#addNewRecordButton');
  }
  getSpecificElementFromList() {
    return cy.get('.rt-tbody > :nth-child(1)> :nth-child(1)>:nth-child(1)');
  }

  removeUser(number: string) {
    return this.getElementOperation('delete', number).click();
  }

  goToEditUserPanel(number: string) {
    return this.getElementOperation('edit', number).click();
  }

  goToAddUserForm() {
    return this.addUserButton.click();
  }

  addAndEditUser(field: string, info: string) {
    return this.getOneField(field).clear().type(info);
  }

  submitForm() {
    return this.submitButton.click();
  }
}
