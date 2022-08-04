import PageFactory from '../../objects/page_factory';
describe('Radio button section test', () => {
  let radioButton;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    radioButton = PageFactory.RadioButton;
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
