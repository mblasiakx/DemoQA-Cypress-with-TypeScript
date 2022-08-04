import PageFactory from '../../objects/page_factory';
describe('Check Links', () => {
  let links;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    links = PageFactory.Links;
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
      links.clickOnLinksToSendApiCall(name.actionType);

      links.linkInfoMessage
        .should('contain', name.expectType)
        .and('be.visible');
    });

  it('Should open "not found" link', () => {
    links.clickOnLinksToSendApiCall('invalid-url');
  });
});
