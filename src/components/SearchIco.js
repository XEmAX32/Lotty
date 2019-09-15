import React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'

const SearchIco = props => (
	<Svg width={38.562} height={38.562} {...props}>
	<G stroke="#c8c8c8">
	<G transform="translate(4.663)" fill="#fff" strokeWidth={5}>
	<Circle cx={16.949} cy={16.949} stroke="none" r={16.949} />
	<Circle cx={16.949} cy={16.949} fill="none" r={14.449} />
	</G>
	<Path fill="none" strokeWidth={6} d="M2.121 36.441l8.475-8.475" />
	</G>
	</Svg>
)

export default SearchIco
