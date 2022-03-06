/**
 *  TipList renders individual tip objects as HTML
 */

 import { getTips } from "./TipData.js"
 import { Tip } from "./Tip.js"
 
 export const TipList = () => {
 
     // Get a reference to the location on the DOM you want to display the list of tips
     const contentElement = document.querySelector(".tipsPane")
     // Get the tip array
     const tips = getTips()
     // Declare a variable to hold on to the tips HTML representation
     let tipsHTMLRepresentation = "";
     // Loop over the array of tips
     for (const singleTip of tips) {
        tipsHTMLRepresentation += Tip(singleTip);
     }
     // Set the dom equal to the variable containing the tip html representations
     contentElement.innerHTML += `
         ${tipsHTMLRepresentation}
     `
 }