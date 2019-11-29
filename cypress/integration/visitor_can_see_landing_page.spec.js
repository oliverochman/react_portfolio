describe('Visitor can see landing page', () => {
  it('visitor can see content when loading the page', () => {
    cy.visit('/')

    cy.get("nav")
      .should("contain", "About Me")
      .and("contain", "Projects")
      .and("contain", "My Portfolio")

    cy.get(".ui.main.container")
      .should("contain", "Hello World")
      .and("contain", "I am studying to become a fullstack junior web developer")
  });

  it('visitor can see content on projects page', () => {
    cy.visit('/')

    cy.get("nav").within(() => {
      cy.contains("Projects").click()
    })

    cy.get(".ui.card").should("have.length", 3)

    cy.get(".ui.main.container")
      .should("contain", "My First Website")
      .should("contain", "UI Design")
      .should("contain", "Mobile UX")
  });
})