import { config } from '../../../config';
import { BasePage } from '../../objects/base_page';
import { TextBox } from '../../objects/elements/text_box';

describe('Test Text Box in Elements tab', () => {
  let textBox;
  before(() => {
    cy.visit('/');
    const basePage = new BasePage();
    textBox = new TextBox();
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Text Box');
  });

  it('Should type correct data', () => {
    textBox.putDataIntoUserForm('userName', config['Text-box'].User.name);
    textBox.putDataIntoUserForm('userEmail', config['Text-box'].User.email);
    textBox.putDataIntoUserForm(
      'currentAddress',
      config['Text-box'].User.currentAddress
    );
    textBox.putDataIntoUserForm(
      'permanentAddress',
      config['Text-box'].User.pernamentAddress
    );

    textBox.userName
      .should('have.value', config['Text-box'].User.name)
      .and('be.visible');
    textBox.userEmail
      .should('have.value', config['Text-box'].User.email)
      .and('be.visible');
    textBox.currentAddress
      .should('have.value', config['Text-box'].User.currentAddress)
      .and('be.visible');
    textBox.permanentAddress
      .should('have.value', config['Text-box'].User.pernamentAddress)
      .and('be.visible');
  });

  it('Should submit form', () => {
    textBox.submitUserForm();
  });
});
