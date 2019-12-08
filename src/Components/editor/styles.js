import styled, { keyframes } from 'styled-components';
import { COLORS, QUERIES } from '../../Styling/Styling';
import settings from '../../images/settings.svg';

export const EditorWrapper = styled.div`
    background-color: ${COLORS.lightGray};
    width: 100%;
    min-height: 100vh;

    .selected {
        background-color: blue;
    }

    @media (${QUERIES.medium}) {
        width: calc(100% - 320px);
    }
`;

export const BuildChildCont = styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition-duration: 0.3s;
    border: 2px solid transparent;
    cursor: grab;

    @media (${QUERIES.medium}) {
        width: 80%;
    }
`;

const fadein = keyframes`
    0%{
      border: 0px solid #6C63FF;
      box-shadow: -5px 5px 30px rgba(0, 0, 0, 0);
    }

    100%{
      border: 3px solid #6C63FF;
      box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.12);
    }
`;

export const ChildDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
    height: 200px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 4.5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
    border: 3px solid transparent;
    transition: 0.3s ease;

    svg {
        margin-top: 50px;
    }

    span {
        display: block;
        width: 100%;
        height: 70px;
        text-align: center;
    }
`;

export const SplitDiv = styled(ChildDiv)`
    width: 47%;
`;

export const TriDiv = styled(ChildDiv)`
    width: 30%;
`;

export const NavDiv = styled(ChildDiv)``;

export const FooterDiv = styled(ChildDiv)``;
