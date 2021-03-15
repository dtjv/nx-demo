/// <reference types="cypress">

declare namespace Cypress {
  interface Chainable<Element> {
    getBySel(dataTestAttribute: string, args?: any): Chainable<Element>
    getBySelLike(
      dataTestPrefixAttribute: string,
      args?: any
    ): Chainable<Element>
  }
}
