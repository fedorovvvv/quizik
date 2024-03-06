import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: var(--container-max-width);
  width: 100%;
  padding: 0 var(--container-padding-x);
  margin: 0 auto;
`

export const LayoutContainerCentered = styled(LayoutContainer)`
  display: flex;
  align-content: center;
  justify-content: center;
`
