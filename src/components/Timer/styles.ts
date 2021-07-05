import styled, { css } from 'styled-components'

type TimeProps = {
  timeLeft: number
}

export const Time = styled.span<TimeProps>`
  ${({ theme, timeLeft }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${timeLeft > 5 ? theme.colors.white : theme.colors.error};
    text-align: center;
    margin-bottom: ${theme.spacings.medium};
  `}
`
