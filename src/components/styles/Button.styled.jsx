import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.input)`
    margin-top: 10px;
    width: 50px;
    padding: 5px;
    align-self: self-end;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border-radius: 25px;
    border: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
