export class Modals {
  get modalContent() {
    return cy.get('.modal-content');
  }

  useModal(option: string, size: string) {
    return cy.get(`#${option}${size}Modal`);
  }

  openModal(buttonSize: string) {
    return this.useModal('show', buttonSize).click();
  }
}
