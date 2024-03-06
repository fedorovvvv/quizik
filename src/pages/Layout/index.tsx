import { PropsWithChildren } from 'react'
import { styled } from 'styled-components'

type Props = PropsWithChildren

const Main = styled.main`
  flex: 1;
  width: 100%;
`

export default function Layout({ children }: Props) {
  return <Main>{children}</Main>
}
