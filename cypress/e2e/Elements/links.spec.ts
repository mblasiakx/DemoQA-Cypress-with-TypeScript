import { BasePage } from '../../objects/base_page';
import { Links } from '../../objects/elements/links';
describe('Check Links', () => {
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Links');
  });

  const textData = [
    { actionType: 'created', expectType: 'Created' },
    { actionType: 'no-content', expectType: 'No Content' },
    { actionType: 'moved', expectType: 'Moved' },
    { actionType: 'bad-request', expectType: 'Bad Request' },
    { actionType: 'unauthorized', expectType: 'Unauthorized' },
    { actionType: 'forbidden', expectType: 'Forbidden' },
  ];

  for (const name of textData)
    it(`Should open "${name.actionType}" link`, () => {
      const links = new Links();
      links.clickOnLinksToSendApiCall(name.actionType);

      links.linkInfoMessage
        .should('contain', name.expectType)
        .and('be.visible');
    });

  it('Should open "not found" link', () => {
    const links = new Links();
    links.clickOnLinksToSendApiCall('invalid-url');
  });
});
