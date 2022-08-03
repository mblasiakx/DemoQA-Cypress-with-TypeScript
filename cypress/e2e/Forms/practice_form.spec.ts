import { BasePage } from '../../objects/base_page';
import { PracticeForm } from '../../objects/forms/practice_forms';
import { config } from '../../../config';

describe('Practice Form', () => {
  let practiceForm;
  before(() => {
    cy.visit('/');
    const basePage = new BasePage();
    practiceForm = new PracticeForm();
    basePage.goToSectionFromCategoryCards('Forms');
    basePage.goToSectionFromleftPanel('Practice Form');
  });

  it('Should fill all fields', () => {
    practiceForm.typeIntoFormElement(
      'first name',
      config['Practice Form'].User.name
    );
    practiceForm.typeIntoFormElement(
      'last name',
      config['Practice Form'].User.surname
    );
    practiceForm.typeIntoFormElement(
      'email',
      config['Practice Form'].User.email
    );
    practiceForm.typeIntoFormElement('radio', 'Male');
    practiceForm.typeIntoFormElement(
      'mobile',
      config['Practice Form'].User.number
    );
    practiceForm.typeIntoFormElement(
      'subject',
      config['Practice Form'].Address.subjectData
    );
    practiceForm.typeIntoFormElement('hobbies', '1');
    practiceForm.typeIntoFormElement('hobbies', '2');
    practiceForm.typeIntoFormElement('hobbies', '3');
    practiceForm.typeIntoFormElement(
      'current address',
      config['Practice Form'].Address.currentAddress
    );
    practiceForm.typeIntoFormElement(
      'state',
      config['Practice Form'].Address.state
    );
    practiceForm.typeIntoFormElement(
      'city',
      config['Practice Form'].Address.stateCity
    );

    practiceForm.firsName
      .should('have.value', config['Practice Form'].User.name)
      .and('be.visible');
    practiceForm.lastName
      .should('have.value', config['Practice Form'].User.surname)
      .and('be.visible');
    practiceForm.email
      .should('have.value', config['Practice Form'].User.email)
      .and('be.visible');
    practiceForm.mobile
      .should('have.value', config['Practice Form'].User.number)
      .and('be.visible');
    practiceForm.currentAddress
      .should('have.value', config['Practice Form'].Address.currentAddress)
      .and('be.visible');
    practiceForm.radio.should('be.checked');
  });

  it('Should submit form', () => {
    practiceForm.submitForm();
  });
});
