export class Alerts {
  get buttonsPanel() {
    return cy.get('#javascriptAlertsWrapper');
  }
  get confirmAlertResult() {
    return cy.get('#confirmResult');
  }
  get promptAlertResult() {
    return cy.get('#promptResult');
  }
  getWindowConfirmClick() {
    return cy.on('window:confirm', () => true);
  }
  actionButton(option: string) {
    return this.buttonsPanel.find(`#${option}Button`);
  }
  testAlert(alertOption: string) {
    return this.actionButton(alertOption).click();
  }
}
