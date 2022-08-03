export class BrokenLinks {
  getLink(text: string) {
    return cy.contains(text);
  }
  clickOnLink(selectedLink: string) {
    return this.getLink(selectedLink).invoke('attr', 'target', '_self').click();
  }
}
