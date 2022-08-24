const APIHelper = require("../APIHelperPage/APIHelper");

class DowloadphotoPage {
    elements = {
      scrollView:()=> cy.get('.hRtYn').scrollIntoView().should('be.visible'),
      RandomPhotos:()=> {    
        cy.get('.mItv1 > div > div > figure').its('length')
        .then((n) => Cypress._.random(0, n -2))
        .then((k) => {
          cy.log('picked random index ${k}')
          cy.get('.mItv1 > div > div > figure').eq(k).click();
          // cy.url().then((url) => {
          //   cy.writeFile('cypress/fixtures/url.json', {url:url})
          // })
          cy.log('href',cy.location('pathname').as('text'));
          cy.get('@text').then((data)=>{
             cy.log(data);
             cy.writeFile('cypress/fixtures/url.json', {endpoint:data})
          })
         
     })
    },
      DownloadFile:()=>{
        cy.xpath("//span[text()='Download']").click();
        cy.get(".zncgw>button>svg").click({force:true});
        cy.get('.fdrIK').click();
        cy.reload();

      }
  };

    ClickRamdomPhotos(){
       // this.elements.scrollView()
        this.elements.RandomPhotos();
    }
    DownloadPhotos(){
        this.elements.DownloadFile();
      
    }
    CheckImageFile(){
      APIHelper.TrackAPhotoDownloadAPI();
      //https://unsplash.com/account/history
      // cy.visit("https://unsplash.com/account/history");
      // cy.get('.download-history-scroll > li').should('be.visible');
      APIHelper.CheckImageLAPI();
    }
}
module.exports = new DowloadphotoPage();
