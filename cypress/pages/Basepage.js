class BasePage {
  element = {
    getElement: (element)=>{
      cy.get(element)
    }
  };
    clickElement(element){
       getElement(element).click()
    }
}

module.exports = new BasePage();