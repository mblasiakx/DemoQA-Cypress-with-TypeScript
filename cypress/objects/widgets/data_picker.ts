export class DatePicker {
  get selectSelectDateContainer() {
    return cy.get('#datePickerMonthYearInput');
  }

  get selectSelectDateYear() {
    return cy.get('.react-datepicker__year-select');
  }

  get selectSelectDateMonth() {
    return cy.get('.react-datepicker__month-select');
  }

  get selectSelectDateDay() {
    return cy.get('.react-datepicker__week');
  }

  get selectDateAndTimeContainer() {
    return cy.get('#dateAndTimePickerInput');
  }

  clickDateInputFromPickerContainer() {
    return this.selectSelectDateContainer.click();
  }

  selectPartOfDateInSelectDate(partOfDate: string, date: string) {
    switch (partOfDate) {
      case 'month':
        return this.selectSelectDateMonth.select(date);
      case 'year':
        return this.selectSelectDateYear.select(date);
      case 'day':
        return this.selectSelectDateDay.contains(date).click();
      default:
        throw new Error('No such element implemented!');
    }
  }

  clickDateAndTimeContainer() {
    return this.selectDateAndTimeContainer.click();
  }

  clearDateInDateAndTime() {
    return this.selectDateAndTimeContainer.clear();
  }

  putDateInDateAndTime(date: string) {
    return this.selectDateAndTimeContainer.type(date);
  }
}
