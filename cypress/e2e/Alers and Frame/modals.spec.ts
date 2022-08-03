import { BasePage } from '../../objects/base_page';
import { Modals } from '../../objects/alerts and frame/modals';

describe('Test Modals', () => {
  let modals;
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    modals = new Modals();
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows');
    basePage.goToSectionFromleftPanel('Modal Dialogs');
  });

  it('Should show small modal ', () => {
    modals.openModal('Small');

    modals.modalContent.should('be.visible');
  });

  it('Should show large modal ', () => {
    modals.openModal('Large');

    modals.modalContent.should('be.visible');
  });
});
