import PageFactory from '../../objects/page_factory';
describe('Test DatePicker', () => {
  let datePicker;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    datePicker = PageFactory.DatePicker;
    basePage.goToSectionFromCategoryCards('Widgets');
    basePage.goToSectionFromleftPanel('Date Picker');
  });

  it('Should select date from Selec Date panel', () => {
    datePicker.clickDateInputFromPickerContainer();
    datePicker.selectPartOfDateInSelectDate('year', '2014');
    datePicker.selectPartOfDateInSelectDate('month', '2');
    datePicker.selectPartOfDateInSelectDate('day', '5');

    datePicker.selectSelectDateContainer
      .should('be.visible')
      .and('have.value', '02/25/2014');
  });

  it('Should select date from Date And Time panel', () => {
    datePicker.clickDateAndTimeContainer();
    datePicker.clearDateInDateAndTime();
    datePicker.putDateInDateAndTime('October 3, 2023 12:00 PM');

    datePicker.selectDateAndTimeContainer
      .should('be.visible')
      .and('have.value', 'October 3, 2023 12:00 PM');
  });
});
