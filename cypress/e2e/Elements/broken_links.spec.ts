import { BasePage } from '../../objects/base_page';
import { BrokenLinks } from '../../objects/elements/broken_links';
describe('Broken Links and Valid Links', () => {
  let brokenLinks;
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Broken Links - Images');
  });

  it('Should open Valid link', () => {
    brokenLinks = new BrokenLinks();
    brokenLinks.clickOnLink('Click Here for Valid Link');
  });
});
