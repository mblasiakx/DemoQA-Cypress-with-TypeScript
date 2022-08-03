export class Slider {
  get sliderContainer() {
    return cy.get('#sliderContainer');
  }
  get slider() {
    return this.sliderContainer.find('.range-slider');
  }
  changeSlider(value: string) {
    return this.slider.invoke('val', value).trigger('change');
  }
}
