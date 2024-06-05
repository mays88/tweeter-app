import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.input)`
    margin-top: 0.63em;
    width: 3.13rem;
    padding: 0.32em;
    align-self: self-end;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border-radius: 1.56em;
    border: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;
