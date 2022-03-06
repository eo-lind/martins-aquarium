/**
 *  FishList renders individual fish objects as HTML
 */

 import { getFish } from "./FishData.js"
 import { getMostHolyFish } from "./FishData.js"
 import { getSoldierFish } from "./FishData.js"
 import { getUnworthy } from "./FishData.js"
 import { fishObjHTML } from "./Fish.js"


 export const FishList = () => {
 
     // Get a reference to the location on the DOM you want to display the list of fish
     const contentElement = document.querySelector(".fishList")
     // Get the fish array
    const holyFish = getMostHolyFish()
    const soldierFish = getSoldierFish()
    const unworthyFish = getUnworthy()

     // Declare a variable to hold on to the fish HTML representation
     let fishHTMLRepresentation = "";
     // Loop over the arrays of fish
     for (const oneThingFromTheSea of holyFish) {
         fishHTMLRepresentation += fishObjHTML(oneThingFromTheSea);
     }

     for (const oneThingFromTheSea of soldierFish) {
        fishHTMLRepresentation += fishObjHTML(oneThingFromTheSea);
    }

    for (const oneThingFromTheSea of unworthyFish) {
        fishHTMLRepresentation += fishObjHTML(oneThingFromTheSea);
    }
     // Set the dom equal to the variable containing the fish html representations
     contentElement.innerHTML += `
         ${fishHTMLRepresentation}
     `
 }