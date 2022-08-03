import { BasePage } from '../../objects/base_page';
import { Slider } from '../../objects/widgets/slider';

describe('Test Slider', () => {
  before(() => {
    cy.visit('/');
    const basePage = new BasePage();
    basePage.goToSectionFromCategoryCards('Widgets');
    basePage.goToSectionFromleftPanel('Slider');
  });

  it('Should slider changes position', () => {
    const slider = new Slider();
    slider.changeSlider('90');

    slider.slider.should('have.value', '90');
  });
});
