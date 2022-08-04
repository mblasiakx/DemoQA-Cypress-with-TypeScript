import { config } from '../../../../config';
import PageFactory from '../../objects/page_factory';
describe('WebTables - add,edit and remove', () => {
  let webTables;
  beforeEach(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    webTables = PageFactory.WebTables;
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Web Tables');
  });

  it('Should remove user', () => {
    webTables.removeUser('1');
    webTables.getSpecificElementFromList().should('have.text', 'Alden');
  });

  it('Should add user', () => {
    webTables.goToAddUserForm();
    webTables.addAndEditUser('firstName', config['Web Tables'].User.name);
    webTables.addAndEditUser('lastName', config['Web Tables'].User.surname);
    webTables.addAndEditUser('userEmail', config['Web Tables'].User.email);
    webTables.addAndEditUser('age', config['Web Tables'].User.age);
    webTables.addAndEditUser('salary', config['Web Tables'].User.salary);
    webTables.addAndEditUser(
      'department',
      config['Web Tables'].User.department
    );

    webTables.firstNameEdit
      .should('have.value', config['Web Tables'].User.name)
      .and('be.visible');
    webTables.lastNameEdit
      .should('have.value', config['Web Tables'].User.surname)
      .and('be.visible');
    webTables.emailEdit
      .should('have.value', config['Web Tables'].User.email)
      .and('be.visible');
    webTables.ageEdit
      .should('have.value', config['Web Tables'].User.age)
      .and('be.visible');
    webTables.salayEdit
      .should('have.value', config['Web Tables'].User.salary)
      .and('be.visible');
    webTables.departmentEdit
      .should('have.value', config['Web Tables'].User.department)
      .and('be.visible');
  });

  it('Should edit user', () => {
    webTables.goToEditUserPanel('1');
    webTables.addAndEditUser('firstName', config['Web Tables'].User.name);
    webTables.addAndEditUser('lastName', config['Web Tables'].User.surname);
    webTables.addAndEditUser('userEmail', config['Web Tables'].User.email);

    webTables.firstNameEdit
      .should('have.value', config['Web Tables'].User.name)
      .and('be.visible');
    webTables.lastNameEdit
      .should('have.value', config['Web Tables'].User.surname)
      .and('be.visible');
    webTables.emailEdit.should('have.value', config['Web Tables'].User.email);
  });
});
