export class PracticeForm {
  get practiceForm() {
    return cy.get('.practice-form-wrapper');
  }
  get firsName() {
    return this.practiceForm.find('#firstName');
  }
  get lastName() {
    return this.practiceForm.find('#lastName');
  }
  get email() {
    return this.practiceForm.find('#userEmail');
  }
  get radio() {
    return this.practiceForm.find('.custom-control-input');
  }
  get gender() {
    return this.practiceForm.find('#genterWrapper');
  }
  get mobile() {
    return this.practiceForm.find('#userNumber');
  }
  get dateOfBirth() {
    return this.practiceForm.find('#dateOfBirthInput');
  }
  get subject() {
    return this.practiceForm.find('#subjectsInput');
  }
  get hobby() {
    return cy.get('.custom-control-input');
  }
  get currentAddress() {
    return this.practiceForm.find('#currentAddress');
  }
  get stateAndCityWrapper() {
    return cy.get('#stateCity-wrapper');
  }
  get state() {
    return this.stateAndCityWrapper.find('#react-select-3-input');
  }
  get city() {
    return this.stateAndCityWrapper.find('#react-select-4-input');
  }
  get submitButton() {
    return this.practiceForm.find('#submit');
  }

  typeIntoFormElement(field: string, info: string) {
    switch (field) {
      case 'first name':
        return this.firsName.type(info);
      case 'last name':
        return this.lastName.type(info);
      case 'email':
        return this.email.type(info);
      case 'radio':
        return this.radio.check(info, { force: true });
      case 'date of birth':
        return this.dateOfBirth.clear().type(info);
      case 'mobile':
        return this.mobile.type(info);
      case 'subject':
        return this.subject.type(info);
      case 'hobbies':
        return this.hobby.check(info, { force: true });
      case 'current address':
        return this.currentAddress.type(info);
      case 'state':
        return this.state.type(info, { force: true });
      case 'city':
        return this.city.type(info, { force: true });
      default:
        throw new Error('No such element implemented!');
    }
  }

  submitForm() {
    return this.submitButton.click({ force: true });
  }
}
