import styled from 'styled-components';

export const StyledButton = styled.button`
    background: ${({ color }) => color};
    border-radius: 3px;
    border: 0;
    color: #fff;
    margin-right: 5px;
    outline: 0;
    padding: 4px 10px;
`

export const StyledCounter = styled.div`
    color: ${({ color }) => color};
    &:hover {
        background : red;
    }
`