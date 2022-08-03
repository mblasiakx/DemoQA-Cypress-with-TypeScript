import { BasePage } from '../../objects/base_page';
import { Accordian } from '../../objects/widgets/accordian';

describe('Test Accordian page', () => {
  let accordian;
  before(() => {
    cy.visit('/');
    const basePage = new BasePage();
    accordian = new Accordian();
    basePage.goToSectionFromCategoryCards('Widgets');
    basePage.goToSectionFromleftPanel('Accordian');
  });

  it('Should click "Why do we use it?" section ', () => {
    accordian.clickSection('Why do we use it?');

    accordian.sectionContent('3').parent().find('p').should('be.visible');
  });

  it('Should click "Where does it come from?" section ', () => {
    accordian.clickSection('Where does it come from?');

    accordian.sectionContent('2').parent().find('p').should('be.visible');
  });

  it('Should click "What is Lorem Ipsum?" section ', () => {
    accordian.clickSection('What is Lorem Ipsum?');

    accordian.sectionContent('1').parent().find('p').should('be.visible');
  });
});
