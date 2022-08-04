import PageFactory from '../../objects/page_factory';
describe('Test Modals', () => {
  let modals;

  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    modals = PageFactory.Modals;
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
