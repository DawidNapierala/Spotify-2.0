describe('Tests.cy.ts', () => {
  it('proba komunikacji', () => {
    cy.request("http://localhost:3000/")
  })
})