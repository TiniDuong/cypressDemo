import {
    
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const downloadPhotopage = require("../../../pages/DownloadPage/DowloadPhoto");

When('I open a random photo',()=>{
  downloadPhotopage.ClickRamdomPhotos()
   })
And('I download this photo',()=>{
  downloadPhotopage.DownloadPhotos()
    
  })
Then('I notice that the image is downloadable and the correct image has been saved',()=>{
  downloadPhotopage.CheckImageFile()
  })
  