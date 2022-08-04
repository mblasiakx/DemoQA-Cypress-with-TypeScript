import PageFactory from '../../objects/page_factory';
describe('Browser Windows tests', () => {
  let browserWindow;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    browserWindow = PageFactory.BrowserWindows;
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows');
    basePage.goToSectionFromleftPanel('Browser Windows');
  });

  it('Should open New Tab', () => {
    browserWindow.openTabFromBrowserWindows('tab');

    browserWindow.windowObject.should('be.called');
  });
  it('Should open New Window', () => {
    browserWindow.openTabFromBrowserWindows('window');

    browserWindow.windowObject.should('be.called');
  });
  it('Should open New Window Message', () => {
    browserWindow.openTabFromBrowserWindows('messageWindow');

    browserWindow.windowObject.should('be.called');
  });
});
