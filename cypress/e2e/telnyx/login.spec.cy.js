import MainPage from '../../page/telnyx/main.page.cy'
import Expect from'../../helper/expect.cy'
const login=Cypress.env('USER')
const password=Cypress.env('PASSWORD')

describe('Login page testing', () => {
  beforeEach(() => {
    cy.visit('/')
    Expect.toHaveUrl('https://telnyx.com/');
    cy.closeModalWindowInManePage();
  })
    it('ID-1 -Sign in with valid email account', () => {
    MainPage.clickOnLoginHeaderBtn();
    cy.login(login,password);
    Expect.shouldContainUrl('app');
    })   
  })