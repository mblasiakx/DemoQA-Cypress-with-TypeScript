import { BasePage } from '../../objects/base_page';
import { Alerts } from '../../objects/alerts and frame/alerts';
describe('Browser Windows tests', () => {
  let alert;
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    alert = new Alerts();
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows');
    basePage.goToSectionFromleftPanel(/^Alerts$/);
  });

  it('Should open Alert', () => {
    alert.testAlert('alert');

    cy.on('window:alert', (text) => {
      expect(text).to.contains('You clicked a button');
    });
  });

  it('Should open Confirm Alert', () => {
    alert.testAlert('confirm');
    alert.getWindowConfirmClick();

    alert.confirmAlertResult.should('have.text', 'You selected Ok');
  });

  it('Should open Propmt Alert', () => {
    alert.testAlert('promt');
    cy.window().then(($win) => {
      cy.stub($win, 'prompt').returns('This is a test text');
      cy.get('#promtButton').click();
    });

    alert.promptAlertResult.should(
      'have.text',
      'You entered This is a test text'
    );
  });
});
