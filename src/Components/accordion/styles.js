import styled from 'styled-components';
import { COLORS } from '../../Styling/Styling';

export const AccordionContent = styled.div`
    overflow: hidden;
    /* max-height: 0; */
    transition: 0.5s ease;
`;

export const AccordionWrapper = styled.div`
    &.active {
        button {
            svg {
                transform: rotate(-180deg);
            }
        }
    }
`;

export const AccordionButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    background-color: ${COLORS.border};
    text-align: left;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    color: ${COLORS.mediumGray};

    svg {
        width: 15px;
        height: 15px;
        transition: 0.3s;
        path {
            fill: ${COLORS.mediumGray};
        }
    }
`;
