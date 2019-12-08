import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling/Styling';

export const ControlSideBar = styled.div`
    box-sizing: border-box;
    width: 50px;
    height: 50px;

    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;

    @media (${QUERIES.medium}) {
        width: 320px;
        height: 100vh;
        background-color: white;
    }
`;

export const Padded = styled.div`
    padding: ${props => props.padding};
`;

export const Color = styled.div`
    width: 30px;
    height: 60px;
    background-color: ${props => props.color};
    cursor: pointer;

    &:nth-of-type(2n) {
        margin-right: 10px;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const ColorScheme = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Dropdown = styled.div`
    margin-bottom: 25px;

    .theme__control {
        border-radius: 10px;
        border: none;
        padding: 0 5px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    }

    .theme__indicator-separator {
        background-color: transparent;
    }

    .theme__menu {
        border-radius: 10px;
        outline: none;
        border: none;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    }
    .theme__option,
    .theme__option--is-focused {
        border: none;
    }

    .theme__option--is-selected {
        border: none;
        background-color: ${COLORS.deepPurple};
    }

    .theme__menu-list {
        border-radius: 10px;
        border: none;
        padding: 0;
    }

    .theme__option {
        cursor: pointer;
    }

    .theme__single-value {
        color: ${COLORS.mediumGray};
    }
`;

export const SettingsBar = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    width: calc(100vw - 50px);
    left: 0;
    height: 50px;
    background-color: white;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);

    p {
        margin: 0;
    }

    @media (${QUERIES.medium}) {
        position: relative;
        bottom: 0;
        width: unset;
        left: 0;
        height: unset;
        box-shadow: none;
    }
`;

export const TopBar = styled.div`
    display: none;
    @media (${QUERIES.medium}) {
        display: block;
    }
`;

export const Settings = styled.div`
    display: flex;
    align-items: center;
    color: ${COLORS.mediumGray};
    cursor: pointer;

    &:hover {
        color: ${COLORS.deepBlue};

        svg path {
            fill: ${COLORS.deepBlue};
        }
    }

    svg {
        margin-right: 10px;

        path {
            fill: ${COLORS.mediumGray};
        }
    }
`;

export const Export = styled.button`
    display: inline-block;
    border: none;
    background-color: rgba(132, 211, 242, 0.2);
    padding: 10px 30px;
    border-radius: 18px;
    color: ${COLORS.deepBlue};
    font-weight: bold;
    cursor: pointer;
`;

export const Elements = styled.div`
    margin: 0 auto;
    width: 270px; /* same width of color dropdown */

    display: none;
    @media (${QUERIES.medium}) {
        display: block;
    }
`;

export const Element = styled.div`
    background-color: white;
    color: ${COLORS.mediumGray};
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.3s ease;

    &:hover {
        background-color: ${COLORS.deepPurple};
        color: white;
    }

    svg {
        margin-right: 10px;
    }

    p {
        margin: 0;
    }
`;
