import PageFactory from '../../objects/page_factory';
describe('Test Slider', () => {
  let slider;
  before(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    slider = PageFactory.Slider;
    basePage.goToSectionFromCategoryCards('Widgets');
    basePage.goToSectionFromleftPanel('Slider');
  });

  it('Should slider changes position', () => {
    slider.changeSlider('90');

    slider.slider.should('have.value', '90');
  });
});
