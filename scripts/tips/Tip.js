/**
 *   renders individual tip objects as HTML
 */
 export const Tip = (tipObj) => {
	return `<article class="tip-card">
				<h3 class="tip-name">${tipObj.process}</h3>
				<ul>
					<li class="tip-steps">${tipObj.step1}</li>
                    <li class="tip-steps">${tipObj.step2}</li>
                    <li class="tip-steps">${tipObj.step3}</li>
					<li class="tip-steps">${tipObj.step4}</li>
				</ul>
        	</article>`
}