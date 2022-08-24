import {
    
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import APIHelper from "../../../pages/APIHelperPage/APIHelper";
  const likepage = require("../../../pages/LikePhotoPage/LikePhotopage");

And ('I like three random photos',()=>{
    for(var i =0; i<3; i++){
      likepage.LikeAPhotoRandom();
    }
  })
  When ('I go to like page',()=>{
    likepage.visitLikepage()
  })
  Then ('I see the number of likes is three',()=>{
    likepage.numberLikes();
    APIHelper.APIGetPhotoLiked();
   //
  })         
  And ('three photos appear in Likes section',()=>{
    likepage.check3photosinLikepage()
    APIHelper.ReadResultRespond();
  })    
   
        