describe("FactoryPal Dashboard", () => {
  const SELECTORS = {
    pageTitle: "[data-testid='main-header']",
    table: "table",
    tableHeader: "th",
    tableRow: "tr td",
    tableCell: "td",
    loadingIndicator: "[data-testid='loader']",
    efficiencyArticle: "#efficiency-metrics",
    downtimeArticle: "#downtime-metrics",
    shiftArticle: "#shift-metrics",
  };

  const waitForPageLoad = () => {
    cy.get(SELECTORS.pageTitle, { timeout: 10000 }).should("be.visible");
  };

  const verifyTableHasData = () => {
    cy.get(SELECTORS.table).within(() => {
      cy.get(SELECTORS.tableHeader).should("have.length.greaterThan", 0);
      cy.get(SELECTORS.tableRow).should("have.length.greaterThan", 0);
      cy.get(SELECTORS.tableCell).first().should("not.be.empty");
    });
  };

  beforeEach(() => {
    cy.visit("/");
  });

  describe("Loading States", () => {
    it("should show loading indicator during initial page load", () => {
      cy.get(SELECTORS.loadingIndicator).should("be.visible");

      waitForPageLoad();
      cy.get(SELECTORS.loadingIndicator).should("not.exist");
    });

    it("should display data after loading completes", () => {
      waitForPageLoad();

      verifyTableHasData();
    });
  });

  describe("Dashboard Visibility", () => {
    it("should display the main header", () => {
      cy.get(SELECTORS.pageTitle).should(
        "contain.text",
        "FactoryPal Metrics Dashboard"
      );
    });

    it("should render the table with data", () => {
      waitForPageLoad();
      verifyTableHasData();
    });

    it("should have a select dropdown for category filtering", () => {
      cy.get("[data-testid='select-container']").should("exist");
      cy.get("[data-testid='select']").should("be.visible");

      cy.get("[data-testid='select']")
        .should("have.attr", "aria-label", "Select category")
        .and("have.attr", "aria-required", "true");

      cy.get("[data-testid='select'] option").should(
        "have.length.greaterThan",
        0
      );

      cy.get("[data-testid='select'] option").first().should("have.text", "All");
    });

    it('should render all articles when "All" category is selected', () => {
      cy.get("[data-testid='select-container']").should("exist");
      cy.get("[data-testid='select']").select("All");   
      cy.get(SELECTORS.efficiencyArticle).should("be.visible");
      cy.get(SELECTORS.downtimeArticle).should("be.visible");
      cy.get(SELECTORS.shiftArticle).should("be.visible");
    });


    it('should have a table with the correct headers', () => {
      cy.get(SELECTORS.table).within(() => {
        cy.get(SELECTORS.tableHeader).should("have.length.greaterThan", 0);
        cy.get(SELECTORS.tableHeader).first().should("not.be.empty");
      });
    });

    describe("Table Interactions", () => {
      it("should allow row selection and highlight selected row", () => {
        cy.get(SELECTORS.tableRow).first().click();
        cy.get(SELECTORS.tableRow).first().should("have.css", "background-color", "rgb(209, 231, 255)");
      });



      it("should scroll up to the article section when a row is clicked", () => {
        cy.get(SELECTORS.tableRow).first().click();
        cy.get(SELECTORS.efficiencyArticle).should("be.visible");
      });

      it("should allow clicking on label to focus on select", () => {
        cy.get("[data-cy='select-label']").click();
        cy.get("[data-testid='select']").should("have.focus");
      });

  


      it("should allow the select to be click on the select a category and update the table", () => {
        cy.get("[data-testid='select']").select("efficiency");
        cy.get(SELECTORS.tableRow).should("have.length.greaterThan", 0);
        cy.get(SELECTORS.tableRow).each((row) => {
          cy.wrap(row).should("contain.text", "efficiency");
        });
      });

    });
  });
});
