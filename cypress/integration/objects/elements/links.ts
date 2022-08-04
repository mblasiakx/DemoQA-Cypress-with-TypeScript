export class Links {
  get linkWrapper() {
    return cy.get('#linkWrapper');
  }
  getLinkUrl(name: string) {
    return this.linkWrapper.find(`#${name}`);
  }
  get linkInfoMessage() {
    return cy.get('#linkResponse');
  }

  clickOnLinksToSendApiCall(link: string) {
    return this.getLinkUrl(link).click();
  }
}
