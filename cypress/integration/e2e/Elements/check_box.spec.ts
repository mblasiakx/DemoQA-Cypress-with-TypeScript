import PageFactory from '../../objects/page_factory';
describe('Test Check box', () => {
  let checkBox;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    checkBox = PageFactory.CheckBox;
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Check Box');
  });

  it('Should click expand and click each button', () => {
    checkBox.showAllButtons();
    checkBox.clickSingleButton('Home');

    checkBox
      .getOneButton('Home')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Desktop')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Notes')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Commands')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Documents')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('WorkSpace')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Office')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Downloads')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Word File')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
    checkBox
      .getOneButton('Excel File')
      .parent()
      .find('.rct-checkbox')
      .children()
      .should('have.class', 'rct-icon rct-icon-check');
  });
});
