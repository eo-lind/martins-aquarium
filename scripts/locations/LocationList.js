/**
 *  LocationList renders individual location objects as HTML
 */

 import { getLocations } from "./LocationData.js"
 import { Location } from "./Location.js"
 
 export const LocationList = () => {
 
     // Get a reference to the location on the DOM you want to display the list of locations
     const contentElement = document.querySelector(".locationPane")
     // Get the location array
     const Locations = getLocations()
     // Declare a variable to hold on to the locations HTML representation
     let locationsHTMLRepresentation = "";
     // Loop over the array of locations
     for (const singleLocation of Locations) {
        locationsHTMLRepresentation += Location(singleLocation);
     }
     // Set the dom equal to the variable containing the location html representations
     contentElement.innerHTML += `
         ${locationsHTMLRepresentation}
     `
 }