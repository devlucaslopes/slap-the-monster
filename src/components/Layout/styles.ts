import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.primary};

    ${media.greaterThan('large')`
      max-width: 80rem;
      height: 80vh;
      border-radius: ${theme.border.radius};
      box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.28);
    `}
  `}
`
