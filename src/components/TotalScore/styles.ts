import styled, { css } from 'styled-components'

export const Score = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    text-align: center;
    margin: ${theme.spacings.medium} 0;
  `}
`
