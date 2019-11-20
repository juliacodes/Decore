import styled from 'styled-components';
import { COLORS } from '../../Styling/Styling';

export const ControlSideBar = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
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
        border-radius: 3px;
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
    border-top: 1px solid ${COLORS.border};
    font-size: 14px;

    p {
        margin: 0;
    }
`;

export const TopBar = styled.div`
    border-bottom: 1px solid ${COLORS.border};
`;

export const Settings = styled.div`
    display: flex;
    align-items: center;
    color: ${COLORS.mediumGray};
    cursor: pointer;

    &:hover {
        color: ${COLORS.darkBlue};

        svg path {
            fill: ${COLORS.darkBlue};
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
    color: ${COLORS.darkBlue};
    font-weight: bold;
    cursor: pointer;
`;
