import styled from 'styled-components/macro'

import { ExternalLink } from '../../theme'

const Container = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 1rem;
  text-decoration: underline;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    bottom: 70px;
    text-align: center;
  `}
`

export const Underline = styled.span`
  text-decoration: underline;
`

export function LoveFromBidda() {
  return (
    <Container>
      <ExternalLink href="https://bidda.io">with ❤️ from Bidda.io</ExternalLink>
    </Container>
  )
}
