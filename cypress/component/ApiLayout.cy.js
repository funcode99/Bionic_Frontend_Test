import ApiLayout from "../../src/components/ApiLayout.vue";

Cypress.Commands.add("uploadFile", (fileName) => {
  cy.fixture(fileName, 'base64').then(fileContent => {
    cy.get('#file_input').attachFile({
      fileContent: fileContent,
      fileName: fileName,
      mimeType: 'application/pdf'
    });
  });
});

describe("access.input", () => {

  it("show text input data", () => {
   
    cy.mount(ApiLayout);
   
    cy.get("[data-cy='message']").type('berisi').invoke('val').then(value => cy.log(value))
  })
  
  it("show file name & failed to submit", () => {
      cy.mount(ApiLayout);
      
      cy.get("#file_input")
        .as("fileInput")

      cy.fixture("star.png").then(fileContent => {
        cy.get("@fileInput").attachFile({
          fileContent: fileContent.toString(),
          fileName: "bintang.png",
          mimeType: "image/png"
        })
      })

  
      // cy.get("@fileInput").attachFile('example.json')
      // cy.contains("Error: Invalid file format")

        
        // .attachFile("example.json")
        // .attachFile("star.png")
        // .readFile("src/assets/star.png")
        
        // .selectFile("src/assets/star.png");

      cy.get("#file_input").invoke('val').then(inputValue => cy.log(inputValue))
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

  it("should only accept files with a pdf extension", () => {
    cy.mount(ApiLayout)
    cy.get("#file_input")
    .as("fileInput")
    cy.uploadFile("star.png")
    // untuk memastikan input sudah terupdate
    // harus dikasih garing dua kali baru valid
    cy.get('@fileInput').should('have.value', 'C:\\fakepath\\star.png')
    cy.get('.v-toast__text').should('exist');
  })

});

// describe("access.text.input", () => {
//   it("show text input data", () => {
//     // komponen wajib dimasukin
//     cy.mount(ApiLayout);
//     // Input nya dari sini cuy ternyata wkwkwkwk
//     cy.get("[data-cy='message']").type('berisi').invoke('val').then(value => cy.log(value))
//   })
// })
