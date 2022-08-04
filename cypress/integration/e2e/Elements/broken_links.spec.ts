import PageFactory from '../../objects/page_factory';
describe('Broken Links and Valid Links', () => {
  let brokenLinks;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    brokenLinks = PageFactory.BrokenLinks;
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Broken Links - Images');
  });

  it('Should open Valid link', () => {
    brokenLinks.clickOnLink('Click Here for Valid Link');
  });
});
