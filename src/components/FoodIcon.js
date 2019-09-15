import React from 'react'
import Svg, { G, Path, Circle } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={151.238} height={245.342} {...props}>
    <G
      data-name="Group 3"
      transform="translate(-251.963 -1198.717)"
      fill="none"
      stroke="#dd7962"
      strokeWidth={2}
    >
      <Path
        data-name="Path 32"
        d="M322.446 1271.01h-69.262l34.631 172.049h69.262l34.631-172.049z"
      />
      <Circle
        data-name="Ellipse 3"
        cx={24.315}
        cy={24.315}
        r={24.315}
        transform="translate(298.315 1332.719)"
      />
      <Path
        data-name="Path 33"
        d="M335.097 1271.01l22.761-70.867 44.286 22.619.048 9.614-39.454-19.037-18.114 57.625z"
      />
      <Path data-name="Path 34" d="M331.081 1264.335H253v-11.052h81.431" />
      <Path data-name="Path 35" d="M353.366 1253.283h38.157v11.052h-40.748" />
    </G>
  </Svg>
)

export default SvgComponent
