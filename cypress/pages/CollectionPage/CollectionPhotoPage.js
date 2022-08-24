const APIHelper = require("../APIHelperPage/APIHelper");

class CollectionPhotoPage {

    elements = 
    {
          thefirstphoto: () =>  cy.get('*[data-test="photo-grid-multi-col-img"]'),
          PrivateCollection:()=> cy.get(".EdCFo [title='Add to collection']"),
          addcollection:()=>{
            cy.xpath("//button[text()='Create a new collection']").click()
            cy.get("[name='title']").type("colect1")
            cy.get("[name='privacy']").click()
            cy.xpath("//button[text()='Create collection']").click();
            cy.wait(10000);

        },
        AddRandomPhotoColection(){    
          cy.get('.mItv1 > div > div > figure>div>div>a>div>div>div>img').its('length')
          .then((n) => Cypress._.random(0, Math.round((n - 1))))
          .then((k) => {
            cy.log('picked random index ${k}')
            cy.get('.mItv1 > div > div > figure>div>div>a>div>div>div>img').eq(k).click();
          
           
            cy.get(".EdCFo [title='Add to collection']").then(($el) => {
              Cypress.dom.isDetached($el) // false
            })

              cy.get(".EdCFo [title='Add to collection']").then((jQueryElement) => {
              let elemHtml = jQueryElement.get(0)
              elemHtml.addEventListener('keydown', (event) => {
                expect(event instanceof KeyboardEvent).to.be.true
                done()
              })
              cy.get(".EdCFo [title='Add to collection']").click({force:true});
            })
            cy.get('.yOdfb > li>button>div>img',{timeout:60000})
            cy.get(".yOdfb > li>button>div>img").then((jQueryElement) => {
              let elemHtml = jQueryElement.get(0)
              elemHtml.addEventListener('keydown', (event) => {
                expect(event instanceof KeyboardEvent).to.be.true
                done()
              })
                cy.get(".yOdfb > li>button>div>img").then(($el) => {
              Cypress.dom.isDetached($el) // false
            })
            })
           
          })
        },  
       
        RemoveRandomPhotoColection(){    
             cy.get('.yOdfb>li>button').eq(0).click();
        },  
        closePhoto(){
          cy.get("html > body > div:nth-of-type(5)>div>div>div>button").click() //click after create a collecto
          cy.wait(0);
          cy.get('.fdrIK').click();//click close a photo
        },
        collectionsPage:()=> cy.get(),
        ThePhotohasbeenRemoved:()=> cy.get('.wl5gA').click(),
        visitCollectionpage:()=>cy.visit('https://unsplash.com/@bee1659806163147/collections'),
        FindPhotohasbeenRemoved:()=>{
          cy.get("[title='Your personal menu button'] img").click();
          cy.xpath("//a[text()='View profile']").click();
          cy.xpath('.ksdVo > li:nth-of-type(3)"]').invoke('text').then((text) => {
            expect(text.trim()).to.include('1')
        }); },
        getTheFistPhoto: () => cy.get("div:nth-child(1) > figure:nth-child(1) .YVj9w"),  
    };
    //Main
  ClickTheFirstPhoto() {
      this.elements.getTheFistPhoto().click()
    //  APIHelper.Gettoken();
    }
  CreatePrivateCollection(){
      this.elements.PrivateCollection().click()
      this.elements.addcollection();
      this.elements.closePhoto();
}
  AddThefirtRandomphotostoCollection(){
    this.elements.AddRandomPhotoColection();
    this.elements.closePhoto();
    APIHelper.GetCollectionIdAPI();
    }
    AddTheSecondRandomphotostoCollection(){
      this.elements.AddRandomPhotoColection();
     }
  
  RemovePhoto(){
    this.elements.RemoveRandomPhotoColection();
    this.elements.closePhoto();
    APIHelper.GetCollectionIdAPI();
    this.GetIdFromJsonFile(1);
  }
  GotoCollectionsPage(){
        this.elements.visitCollectionpage()
  }
  VerifyThePhotohasbeenRemoved(){
      this.elements.FindPhotohasbeenRemoved();
  }

GetIdFromJsonFile(count){
  cy.readFile("cypress/fixtures/collectionId.json", () => {
  }).then((data) => {
   // cy.log(data.length).should('eq',count);
    for (var index in data) {
      cy.xpath("//*[@href='/collections/"+ data[index].id +"']").should('be.visible');
    }
  })
}

}
module.exports = new CollectionPhotoPage();
