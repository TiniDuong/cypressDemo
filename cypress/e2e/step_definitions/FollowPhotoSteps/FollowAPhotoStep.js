
import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const followpage = require("../../../pages/FollowPhotosPage/FollowPhoto");

When('I click the first photo on home page',() =>{
  followpage.ClickTheFirstPhoto()
 })
When ('I hover on icon user at the top left corner',()=>{
  followpage.HoverOniconUser()
   
})
And('I click the Follow as {string} button',(btn)=>
{
  followpage.clickOnFollowButton(btn)
})
Then('I observe button text turn into Following as {string}',(btn)=>{
 followpage.verifyIconTurninToFollowing(btn)
})

And('I click the Following as {string} button',(btn)=>
{
 followpage.TurnInToFolow(btn)
})
