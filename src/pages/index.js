import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong } from "@quarkly/widgets";
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
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					.
				</Text>
				<Text font="--base">
					In 2082, ExoProbes were launched to survey exoplanets around nearby stars.{" "}
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
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				About the Images
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="75%" md-width="100%">
					<Text margin="0px" max-width="600px">
						The "exoplanet" images are created using a microscope and a digital camera. A chosen object that serves as a "seed" for the planet is placed under a microscope. Then a camera pointed directly into the eyepiece is used to take a picture. This serves as a simulation of the ExoProbe taking a picture of the planet.{" "}
						<br />
						There is no digital manipulation used on the images. This is intentional so as to preserve the imperfections and to simulate the noise that will be in the introduced in the transmissions beamed from lightyears away.{" "}
						<br />
						<br />
						<Strong>
							The InterPlanetary File System
						</Strong>
						<br />
						The exoplanet images are stored in the InterPlanetary File System (IPFS) and tokenized as NFTs in the Blockchain to preserve them for as long as possible until the actual events take place--that is, when we finally receive actual transmissions from ExoProbes! We have yet to launch the ExoProbes but hey, this a good start!
						<br />
						<br />
						<Strong>
							History
						</Strong>
						<br />
						Sometime in 2010, I was interested in Exoplanets and all the new exoplanet discoveries being made. Then one day, me and my son found a microscope on the sidewalk. We played with it for a while, and when I pointed a digital camera directly into the eyepiece and took a picture, the image looked like a picture of a planet! And the idea was born.
						<br />
						I began to put different items in the slide and took pictures. Each photo looked entirely unique. Each item simulated a different kind of planet. I have saved these images and became busy with other things. Promising to create a website for it someday.
						<br />
						<br />
						<Strong>
							Here and Now
						</Strong>
						<br />
						With all the rage that has happened with NFTs a couple months ago, I dreamed of owning at least one NFT in my wallet, and then creating one of my own. But gas fees were too high and I can't afford Beeple's artworks.
						<br />
						Then I came across #OBJKT4OBJKT on twitter and carefully picked my collection of free but awesome NFTs. I was so happy because I finally became an art collector. Then I felt that I had to give back...someday.
						<br />
						I was ready to sign off for the night when i wondered what Hic Et Nunc meant. It was Latin for "Here and Now".
						<br />
						I had to act now.
						<br />
						I remembered the Exoplanet pictures I had that were sitting in my GDrive and minted one of them. It was my very first NFT.
						<br />
						The rest is history.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="100%">
					<Text margin="0px">
						The images are available as a collection of NFTs at hicetnunc.xyz{" "}
						<Link href="#">
							here
						</Link>
						.
					</Text>
				</StackItem>
			</Stack>
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