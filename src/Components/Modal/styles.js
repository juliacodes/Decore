import styled from 'styled-components';
import { COLORS, FONTS } from '../../Styling/Styling';

export const ModalWrapper = styled.div`
    position: relative;
    background-color: white;
    transform: translateY(100px);
    max-width: 1000px;
    width: 750px;
    margin: 0 20px;
    transition: 0.3s ease;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    z-index: 99;
    display: block;
`;

export const CodeModalWrapper = styled.div`
    background-color: white;
    transform: translateY(0px);
    max-width: 1200px;
    width: 1200px;
    margin: 0 20px;
    transition: 0.3s ease;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease;

    &.active {
        visibility: visible;
        pointer-events: all;
        opacity: 1;
        z-index: 2;

        ${ModalWrapper} {
            transform: translateY(0);
        }
    }
`;

export const ModalHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(208, 208, 208, 0.5);
    font-family: ${FONTS.secondary};
    p {
        margin: 0;
        font-size: 30px;
        color: ${COLORS.slate};
    }

    svg {
        cursor: pointer;
    }
`;

export const ModalBody = styled.div`
    padding: 0 20px;
    font-family: ${FONTS.secondary};
`;
