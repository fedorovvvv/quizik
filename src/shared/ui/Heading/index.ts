import { memo } from 'react'
import styled from 'styled-components'

type SizesKeys = 1 | 2 | 3 | 4 | 5 | 6

const sizesMap = new Map<SizesKeys, number>([
  [1, 48],
  [2, 36],
  [3, 32],
  [4, 24],
  [5, 20],
  [6, 16]
])

const H1 = styled.h1`
  font-size: ${sizesMap.get(1)}px;
`

const H2 = styled.h2`
  font-size: ${sizesMap.get(2)}px;
`

const H3 = styled.h3`
  font-size: ${sizesMap.get(3)}px;
`
const H4 = styled.h4`
  font-size: ${sizesMap.get(4)}px;
`
const H5 = styled.h5`
  font-size: ${sizesMap.get(5)}px;
`

const H6 = memo(styled.h6`
  font-size: ${sizesMap.get(6)}px;
`)

export default {
  H1: memo(H1),
  H2: memo(H2),
  H3: memo(H3),
  H4: memo(H4),
  H5: memo(H5),
  H6: memo(H6)
}
