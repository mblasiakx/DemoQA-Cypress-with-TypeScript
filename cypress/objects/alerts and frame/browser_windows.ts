export class BrowserWindows {
  get windowObject() {
    return cy.window().its('open');
  }
  windowButtons(option: string) {
    return cy.get(`#${option}Button`);
  }
  openTabFromBrowserWindows(buttonOption: string) {
    return this.windowButtons(buttonOption).click();
  }
}
