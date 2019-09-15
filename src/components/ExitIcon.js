import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={18.385} height={18.799} {...props}>
    <G data-name="Group 1" stroke="#fff" strokeLinecap="round" strokeWidth={3}>
      <Path data-name="Path 1" d="M16.264 2.12L2.122 16.264" fill="#fff" />
      <Path data-name="Line 3" fill="none" d="M16.264 16.677L2.122 2.535" />
    </G>
  </Svg>
)

export default SvgComponent
