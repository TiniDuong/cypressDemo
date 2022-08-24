const APIHelper = require("../APIHelperPage/APIHelper");

class LikePhotopage {
    elements = {
       //Find length photo and click random 3 photos
     LikeRandomPhoto(){    
      cy.get('.mItv1 > div > div > figure').its('length')
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        cy.log('picked random index ${k}')
        // get all elements again and pick one
        cy.get('.mItv1 > div > div > figure').eq(k).click();
        cy.get('.EdCFo [title="Like"]').click();
        cy.get('.fdrIK').click();
      })
    },  
    gotoLikepage: ()=> {
      cy.get("[title='Your personal menu button'] img").click()
      cy.xpath("//a[text()='View profile']").click()
      cy.xpath('//*[@data-test="user-nav-link-likes"]').click()
    }, 
    numberlikes:()=>{
      cy.reload();
      cy.get(".ksdVo > li:nth-of-type(2)").invoke('text').then((text) => {
        expect(text.trim()).to.include('3')
    });
    },
    Verify3PhotosinLikeSection(){
      cy.get('.mItv1 > div > figure').should('be.visible');
      cy.readFile("cypress/fixtures/photoid.json", () => {
      }).then((data) => {
        for (var index in data) {
          cy.xpath("//*[@href='/photos/"+ data[index].id +"']").should('be.visible')
        }
      })
    }  
  };
  //like 3 photo
    LikeAPhotoRandom(){
      this.elements.LikeRandomPhoto()
    }
    //then go to visit like page
    visitLikepage(){
        this.elements.gotoLikepage()
    }
    numberLikes(){
        this.elements.numberlikes()
    }
    check3photosinLikepage(){
      APIHelper.APIGetPhotoLiked();
      this.elements.Verify3PhotosinLikeSection();
    }
          
 
}
module.exports = new LikePhotopage();
