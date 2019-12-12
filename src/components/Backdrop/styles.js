import styled from 'styled-components'

export const StyledBackdrop = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    ${({ zindex }) => zindex ? `z-index: ${zindex}` : ''};
`