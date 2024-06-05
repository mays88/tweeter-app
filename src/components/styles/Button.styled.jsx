import styled from "styled-components";

export const Button = styled.input`
    margin-top: 10px;
    width: 50px;
    padding: 5px;
    align-self: self-end;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 25px;
    border: none;
    /* 
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        padding: 4px;
    } */
`;
