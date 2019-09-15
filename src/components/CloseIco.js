import React from 'react'
import Svg, { Defs, G, Rect, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CloseIco = props => (
	<Svg width={80} height={80} {...props}>
	<Defs></Defs>
	<G data-name="Group 20">
	<G filter="url(#prefix__a)">
	<Rect
	data-name="Rectangle 21"
	width={50}
	height={50}
	rx={5}
	transform="translate(15 15)"
	fill="#f5f5f5"
	/>
	</G>
	<G
	data-name="Group 1"
	fill="none"
	stroke="#707070"
	strokeLinecap="round"
	strokeWidth={3}
	>
	<Path data-name="Path 1" d="M45.278 34.722L34.671 45.33" />
	<Path data-name="Line 3" d="M45.277 45.279L34.671 34.672" />
	</G>
	</G>
	</Svg>
)

export default CloseIco

