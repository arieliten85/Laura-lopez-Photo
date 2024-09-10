describe("Navigation Component", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("should render the navigation menu correctly", () => {
    cy.viewport(1280, 720);
    cy.get(".wrapper").should("be.visible");
  });

  it("Logo should redirect to home page when clicked", () => {
    cy.viewport(1280, 720);
    cy.get(".logo a").click();
    cy.url().should("eq", `${BASE_URL}/`);
  });

  it("Home link should redirect to the home page when clicked", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="nav-link-home"]').click();
    cy.url().should("eq", `${BASE_URL}/`);
  });

  it("Bodas link should redirect to the bodas page when clicked", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="nav-link-bodas"]').click();
    cy.url().should("eq", `${BASE_URL}/bodas`);
  });

  it("Contacto link should redirect to the contacto page when clicked", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="nav-link-contacto"]').click();
    cy.url().should("eq", `${BASE_URL}/contacto`);
  });

  it("Submenu link for comunión should redirect to the comunión page when clicked", () => {
    cy.viewport(1280, 720);

    cy.get('[data-test="nav-link-sessions-pc"]')
      .parent()
      .find("ul")
      .should("exist")
      .invoke("css", "visibility", "visible")
      .invoke("css", "opacity", "1");

    cy.get('[data-test="submenu-link-comunion"]').should("be.visible").click();

    cy.url().should("eq", `${BASE_URL}/sesiones/comunion/`);
  });
});

describe("Navigation Component - Mobile View", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.viewport(375, 667); // iPhone 6/7/8 size for mobile view
  });

  it("should render the navigation menu correctly on mobile", () => {
    cy.get(".wrapper").should("be.visible");
    cy.get(".menu-icon").should("be.visible"); // Ensure the menu icon is visible
  });

  it("Logo should redirect to home page when clicked", () => {
    cy.get(".logo a").click();
    cy.url().should("eq", `${BASE_URL}/`);
  });

  it("Mobile menu should open and close when clicked", () => {
    cy.get(".menu-icon").click(); // Open the menu
    cy.get(".overlay").should("be.visible"); // Ensure the overlay is visible when the menu is open

    // Add a small wait to ensure the animation or transition has time to complete
    cy.wait(500);

    cy.get(".menu-icon").click(); // Close the menu

    // Check if the overlay is not visible
    cy.get(".overlay").should("not.be.visible");
  });

  it("Home link should redirect to the home page when clicked in mobile view", () => {
    cy.get(".menu-icon").click(); // Open the menu
    cy.get('[data-test="nav-link-home"]').click(); // Click the Home link
    cy.url().should("eq", `${BASE_URL}/`);
  });

  it("Bodas link should redirect to the bodas page when clicked in mobile view", () => {
    cy.get(".menu-icon").click(); // Open the menu
    cy.get('[data-test="nav-link-bodas"]').click();
    cy.url().should("eq", `${BASE_URL}/bodas`);
  });

  it("Contacto link should redirect to the contacto page when clicked in mobile view", () => {
    cy.get(".menu-icon").click(); // Open the menu
    cy.get('[data-test="nav-link-contacto"]').click();
    cy.url().should("eq", `${BASE_URL}/contacto`);
  });

  it("Submenu for Sesiones should open and the comunión link should redirect to the comunión page when clicked", () => {
    cy.get(".menu-icon").click(); // Open the menu
    cy.get('[data-test="nav-link-sessions-mobile"]').click(); // Open the submenu
    cy.get('[data-test="submenu-link-comunion"]').should("be.visible").click(); // Click comunión
    cy.url().should("eq", `${BASE_URL}/sesiones/comunion/`);
  });
});
