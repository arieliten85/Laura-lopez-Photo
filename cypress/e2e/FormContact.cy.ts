describe("FormContact Component", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(`${BASE_URL}/contacto`);
  });

  it("should render the form correctly", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="form-contact"]').should("be.visible");
    cy.get('[data-test="field-nombre"]').should("be.visible");
    cy.get('[data-test="field-correo"]').should("be.visible");
    cy.get('[data-test="field-telefono"]').should("be.visible");
    cy.get('[data-test="field-mensaje"]').should("be.visible");
    cy.get('[data-test="submit-button"]').should("be.visible");
  });

  it("should display validation errors when fields are left empty", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="submit-button"]').click();
    cy.get('[data-test="error-nombre"]').should(
      "contain",
      "Nombre es obligatorio"
    );
    cy.get('[data-test="error-correo"]').should(
      "contain",
      "Correo electrónico es obligatorio"
    );
    cy.get('[data-test="error-telefono"]').should(
      "contain",
      "Teléfono es obligatorio"
    );
    cy.get('[data-test="error-mensaje"]').should(
      "contain",
      "El mensaje es obligatorio"
    );
  });

  it("should display specific validation errors for invalid inputs", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="field-nombre"]').type("A");
    cy.get('[data-test="field-correo"]').type("invalid-email");
    cy.get('[data-test="field-telefono"]').type("12345");
    cy.get('[data-test="field-mensaje"]').type("Short");
    cy.get('[data-test="submit-button"]').click();
    cy.get('[data-test="error-nombre"]').should(
      "contain",
      "El nombre debe tener al menos 2 caracteres"
    );
    cy.get('[data-test="error-correo"]').should(
      "contain",
      "Correo electrónico inválido"
    );
    cy.get('[data-test="error-telefono"]').should(
      "contain",
      "El teléfono debe tener al menos 10 dígitos"
    );
    cy.get('[data-test="error-mensaje"]').should(
      "contain",
      "El mensaje debe tener al menos 10 caracteres"
    );
  });

  it("should submit the form successfully with valid inputs", () => {
    cy.viewport(1280, 720);
    cy.get('[data-test="field-nombre"]').type("Juan Pérez");
    cy.get('[data-test="field-correo"]').type("juan.perez@example.com");
    cy.get('[data-test="field-telefono"]').type("1234567890");
    cy.get('[data-test="field-mensaje"]').type("Este es un mensaje de prueba.");
    cy.get('[data-test="submit-button"]').click();

    // Check if the form fields are cleared after submission
    cy.get('[data-test="field-nombre"]').should("have.value", "");
    cy.get('[data-test="field-correo"]').should("have.value", "");
    cy.get('[data-test="field-telefono"]').should("have.value", "");
    cy.get('[data-test="field-mensaje"]').should("have.value", "");
  });
});
