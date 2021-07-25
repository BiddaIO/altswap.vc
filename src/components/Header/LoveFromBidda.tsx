import styled from 'styled-components/macro'

import { ExternalLink } from '../../theme'

const Container = styled.div`
  width: 100%;
  left: 0;
  bottom: 70px;
  padding-bottom: 1rem;

  position: fixed;
  text-align: center;
  text-decoration: underline;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 3rem;
    `}
`
export const Heart = styled.span`
  color: #f30072;
`

export function LoveFromBidda() {
  return (
    <Container>
      <ExternalLink href="https://bidda.io">
        with <Heart>❤️</Heart> from Bidda.io
      </ExternalLink>
    </Container>
  )
}
