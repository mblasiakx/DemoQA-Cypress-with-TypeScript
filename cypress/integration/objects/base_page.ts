export class BasePage {
  get categoryCards() {
    return cy.get('.category-cards');
  }

  get leftPanel() {
    return cy.get('.left-pannel');
  }

  goToSectionFromCategoryCards(name: string) {
    return this.categoryCards.contains(name).click();
  }

  goToSectionFromleftPanel(name: RegExp | string) {
    return this.leftPanel.contains(name).click();
  }
}
