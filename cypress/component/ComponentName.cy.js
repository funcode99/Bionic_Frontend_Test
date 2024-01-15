import ApiLayout from "../../src/components/ApiLayout.vue";

describe("access.file.input", () => {
  it("show file input data", () => {
    cy.mount(ApiLayout);
    cy.get("#logo_company")
      .as("fileInput")

    cy.fixture("star.png").then(fileContent => {
      cy.get("@fileInput").attachFile({
        fileContent: fileContent.toString(),
        fileName: "star.png",
        mimeType: "image/png"
      })
    })

    // Error handling nya kaya begini ternyata
    cy.get("@fileInput").attachFile('example.json')
    cy.contains("Error: Invalid file format")

      // bisa pakai attachFile juga ternyata, membaca dari folder fixture
      // .attachFile("example.json")
      // .attachFile("star.png")
      // .readFile("src/assets/star.png")
      
      // .selectFile("src/assets/star.png");
    // oalah, ternyata val itu fungsi bawaan dari cypress toh
    cy.get("#logo_company").invoke('val').then(inputValue => cy.log(inputValue))
    cy.get("[data-cy='submit']").click()
    
    // .should("have.text", "Berhasil!")    
    // cy.get(".v-toast__text").contains("Berhasil!")
      
    // cy.on("uncaught:exception", (err, run) => {
    //   cy.get("v-toast__text").should("have.text", "Gagal!")
    // })

    // .contains("Berhasil!")
    // .should('have.text', "Berhasil!")
    cy.get(".v-toast__text").contains("Gagal!").should('have.text', "Gagal!")
  });
});

describe("access.text.input", () => {
  it("show text input data", () => {
    // komponen wajib dimasukin
    cy.mount(ApiLayout);
    // Input nya dari sini cuy ternyata wkwkwkwk
    cy.get("[data-cy='message']").type('berisi').invoke('val').then(value => cy.log(value))
  })
})
