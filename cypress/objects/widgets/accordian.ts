export class Accordian {
  get accordianContener() {
    return cy.get('#accordianContainer');
  }
  allSections(sectionName: string) {
    return this.accordianContener.contains(sectionName);
  }
  clickSection(sectionName: string) {
    return this.allSections(sectionName).click();
  }
  sectionContent(number: string) {
    return cy.get(`#section${number}Heading`);
  }
}
