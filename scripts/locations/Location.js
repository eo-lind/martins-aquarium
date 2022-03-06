/**
 *   renders individual location objects as HTML
 */
 export const Location = (locationObj) => {
	return `<article class="location-card">
				<h3 class="location-city">${locationObj.city}</h3>
				<ul>
					<li class="location-steps">See: ${locationObj.see}</li>
                    <li class="location-steps">Eat: ${locationObj.eat}</li>
                    <li class="location-steps">Stay: ${locationObj.stay}</li>
				</ul>
        	</article>`
}