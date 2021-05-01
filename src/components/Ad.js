import React from "react";
import { useOverrides, Section } from "@quarkly/components";
const defaultProps = {
	"text-align": "center",
	"padding": "100px 0",
	"sm-padding": "40px 0"
};
const overrides = {};

const Ad = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		{children}
	</Section>;
};

Object.assign(Ad, { ...Section,
	defaultProps,
	overrides
});
export default Ad;