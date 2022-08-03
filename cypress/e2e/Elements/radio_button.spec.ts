import { BasePage } from '../../objects/base_page';
import { RadioButton } from '../../objects/elements/radio_button';
describe('Radio button section test', () => {
  let radioButton;
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    radioButton = new RadioButton();
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Radio Button');
  });
  it('Should select Yes', () => {
    radioButton.checkRadioButton('Yes');

    radioButton.buttonInfo.should('have.text', 'Yes');
  });

  it('Should select Impressive', () => {
    radioButton.checkRadioButton('Impressive');

    radioButton.buttonInfo.should('have.text', 'Impressive');
  });
});
