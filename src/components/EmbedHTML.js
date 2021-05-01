import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
	<iframe
	src="https://viewm.moonicorn.network/#%7B%22options%22%3A%7B%22publisherAddr%22%3A%220x8615237D3b426BA84597294119017A719b5A4470%22%2C%22whitelistedTokens%22%3A%5B%220x6B175474E89094C44Da98b954EedeAC495271d0F%22%5D%2C%22whitelistedType%22%3A%22legacy_728x90%22%2C%22randomize%22%3Atrue%2C%22targeting%22%3A%5B%5D%2C%22width%22%3A%22728%22%2C%22height%22%3A%2290%22%2C%22minPerImpression%22%3A%220%22%2C%22fallbackUnit%22%3A%22QmbVpvd5BSC4myBbLgVMJg2wf1zYucKGxUnr9fPTQ3qNke%22%2C%22marketSlot%22%3A%22QmV8RZKiGh5jPiH54pNf4qpjo2SfaJoc81RwJN4FQgVqTM%22%7D%7D"
	width="728"
	height="90"
	scrolling="no"
	frameborder="0"
	style="border: 0;"
	onload="window.addEventListener('message', function(ev) { 
		if (ev.data.hasOwnProperty('adexHeight') && ('https://viewm.moonicorn.network' === ev.origin)) {
			for (let f of document.getElementsByTagName('iframe')) {	
				if (f.contentWindow === ev.source) {
					f.height = ev.data.adexHeight;
				}
			}	
		}
	}, false)"
></iframe>
	`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});