import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall};
    border: 0;
    border-radius: ${theme.border.radius};
    text-transform: uppercase;
    margin: ${theme.spacings.medium} auto;
    display: block;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
