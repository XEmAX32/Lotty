import React from 'react'
import Svg, { G, Path, Text, TSpan } from 'react-native-svg'

const Ticket = props => (
	<Svg width={315} height={87} {...props}>
	<G data-name="Group 19">
	<Path
	data-name="Path 12"
	d="M300 43a15 15 0 0115-15V5a5 5 0 00-5-5H5a5 5 0 00-5 5v23a15 15 0 010 30v24a5 5 0 005 5h305a5 5 0 005-5V58a15 15 0 01-15-15z"
	fill="#123c69"
	/>
	<Text
	data-name="Get your ticket now"
	transform="translate(158 50)"
	fill="#fff"
	fontSize={20}
	fontFamily="CeraPro-Bold, Cera Pro"
	fontWeight={700}
	>
	<TSpan x={-94.79} y={0}>
	{'Get your ticket now'}
	</TSpan>
	</Text>
	</G>
	</Svg>
)

export default Ticket
