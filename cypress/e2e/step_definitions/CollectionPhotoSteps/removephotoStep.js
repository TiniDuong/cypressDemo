import {
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  const collectpage = require("../../../pages/CollectionPage/CollectionPhotoPage");
  And('I find and click the first photo on home page',() =>{
    collectpage.ClickTheFirstPhoto()
   })
When('I create a private collection',()=>{
    collectpage.CreatePrivateCollection()
})
And('I add two random photos to the newly created collection',()=>{
    collectpage.AddThefirtRandomphotostoCollection();
    collectpage.AddTheSecondRandomphotostoCollection();
})
And('I remove one photo from the newly created collection',()=>{
    collectpage.RemovePhoto()
})
And ('I go to collection page',()=>{
    collectpage.GotoCollectionsPage()
})
Then('I notice that the photo has been removed successfully from the collection',()=>{
    collectpage.VerifyThePhotohasbeenRemoved()
})
