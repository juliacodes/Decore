import styled from 'styled-components';
import { COLORS } from '../../Styling/Styling';

export const AccordionContent = styled.div`
    overflow: hidden;
    /* max-height: 0; */
    transition: 0.5s ease;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 14px;
    border-radius: 10px;
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
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    text-align: left;
    padding: 0 10px;
    margin: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.3s;
    color: ${COLORS.mediumGray};
    p {
        margin: 12px 0;
    }
    svg {
        width: 15px;
        height: 15px;
        transition: 0.3s;
        path {
            fill: ${COLORS.mediumGray};
        }
    }
`;
