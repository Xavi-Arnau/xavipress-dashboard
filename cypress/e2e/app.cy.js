describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display the title", () => {
    cy.get("h3").contains("Analytics For This Year");
  });

  it("Edit a post", () => {
    cy.get("a:contains('Posts')").click({ force: true });

    cy.get(":nth-child(1) > :nth-child(4) > a > .bg-blue-500").click({
      force: true,
    });
    cy.get("input[name='title']")
      .click()
      .clear()
      .type("New title for this post");
    cy.get("textarea[name='body']")
      .click()
      .clear()
      .type("Some random text to fill this field");
    cy.get("input[name='author']").click().clear().type("John Doe");
    cy.get("input[name='date']").click().clear().type("2024-08-14");

    cy.get("button:contains('Update Post')").click();
  });
});
