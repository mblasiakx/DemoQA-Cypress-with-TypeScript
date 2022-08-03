export class CheckBox {
  get expandButton() {
    return cy.get('.rct-option-expand-all');
  }
  get allButtons() {
    return cy.get('.rct-text');
  }
  getOneButton(btn: string) {
    return this.allButtons.contains(btn);
  }

  showAllButtons() {
    return this.expandButton.click();
  }

  clickSingleButton(btn: string) {
    return this.getOneButton(btn).click();
  }
}
