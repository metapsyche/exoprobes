import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				ExoProbes
			</title>
			<meta name={"description"} content={"Exoprobes is a collection of fictional images transmitted by exoplanetary probes."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://uploads.quarkly.io/6085970723a143001e08fffc/images/ExoProbes0002.jpg?v=2021-04-25T16:23:58.050Z) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					ExoProbes
				</Text>
				<Text font="--base">
					In 2082, ExoProbes were launched to survey exoplanets around nearby stars.{" "}
					<br />
					<br />
					After thousands of years, the first transmissions of the ExoProbes were finally received back on Earth.
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Meta-INFORMATION
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="75%" md-width="100%">
					<Text margin="0px" max-width="600px">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							The Exoplanet Photographs
							<br />
							<br />
						</Strong>
						The "exoplanet" images were created using a microscope and a digital camera. A tiny object placed under a microscope serves as a "seed" for a planet. Then a camera pointed directly into the eyepiece takes the picture. This serves as a simulation of the ExoProbe capturing a photograph of the exoplanet.{" "}
						<br />
						<br />
						There is no digital manipulation used on the captured images. This is to model the unstable conditions that the exoprobe experienced while capturing images of the planet. And to preserve the imperfections and simulate the noise introduced into the image while in transit. After all, these image transmissions were beamed from lightyears away!
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							The InterPlanetary File System
							<br />
						</Strong>
						<br />
						The exoplanet images are stored in the InterPlanetary File System (IPFS) and tokenized as NFTs in the Blockchain to preserve them for as long as possible until the actual events take place--that is, when we finally receive actual transmissions from ExoProbes! We have yet to launch the ExoProbes but hey, this a good start!
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							History
							<br />
						</Strong>
						<br />
						Sometime in 2010, I was interested in Exoplanets and all the new exoplanet discoveries being made. Then one day, me and my Son found a microscope on the sidewalk. We played with it for a while, and when I pointed a digital camera directly into the eyepiece and took a picture, the image looked like a picture of a planet! And the idea was born.
						<br />
						I began to put different items on the slide and took pictures. Each photo looked entirely unique and simulated a different kind of planet. I saved these images and stashed them away and forgot about them as I became busy with other priorities. I promised to create a website for it someday.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Here and Now
							<br />
						</Strong>
						<br />
						With all the rage that has happened with NFTs a couple months ago, I dreamed of owning at least one NFT from an artist, and/or creating one of my own. But gas fees were too high. I was looking for alternatives to Ethereum such as Tezos when I came across hicetnunc and #OBJKT4OBJKT on twitter. I carefully picked my collection of free but awesome NFTs. I was happy because my dream of owning an awesome NFT became true. In fact it was a little too much that I felt like I "became" an art collector!  :) Then I felt that I had to give back.
						<br />
						I was ready to sign off for the night when i wondered what Hic Et Nunc meant. It was Latin for "Here and Now".
						<br />
						I was inspired. But I had to act then and there.
						<br />
						I remembered the old exoplanet pictures I stashed that were idle in my GDrive. I minted one of them. It was my very first NFT.
						<br />
						I resurrected the whole idea, bought the exoprobes.xyz domain name that same night and was able to BUIDL the site the next day. What a weekend project!
						<br />
						The rest is history.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Roadmap
							<br />
						</Strong>
						<br />
						I will continue to mint the rest of the exoplanet images and clean up my gdrive. I will refine this website and possibly create a dApp around this whole idea.
						<br />
						I will also add more science, and fiction, around the whole ExoProbes concept.
						<br />
						Proceeds from the sales of NFTs will fund future endeavors on this ExoProbes project.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="100%">
					<Text margin="0px">
						The images are available as a collection of NFTs{" "}
						<Link href="https://www.hicetnunc.xyz/tz/tz1a1n1YMLaMAXbHRvAAW2CAUEqqjdeqmgst">
							here
						</Link>
						.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Transmissions
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				At the moment, only a couple of transmitted exoplanet images were received.{" "}
				<br />
				New ones will be minted and uploaded to the IPFS as soon as they arrive.
				<br />
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					<Link
						href="https://www.hicetnunc.xyz/objkt/47627"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						ExoProbes0001
					</Link>
					<br />
					<Link
						href="https://www.hicetnunc.xyz/objkt/47750"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						ExoProbes0002
					</Link>
				</Strong>
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/6085970723a143001e08fffc/images/ExoProbes0001.jpg?v=2021-04-25T22:26:32.700Z" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/6085970723a143001e08fffc/images/ExoProbes0002.jpg?v=2021-04-25T22:26:01.388Z" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px" />
			</Box>
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
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
