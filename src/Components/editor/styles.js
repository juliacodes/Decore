import styled from 'styled-components';
import { COLORS } from '../../Styling/Styling';
import settings from '../../images/settings.svg';

export const EditorWrapper = styled.div`
    background-color: ${COLORS.lightGray};
    width: calc(100% - 320px);
    min-height: 100vh;

    .selected {
        background-color: blue;
    }
`;

export const BuildChildCont = styled.div`
    width: 50%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition-duration: 2s;
    border: 2px solid transparent;
    cursor: grab;
`;

export const ChildDiv = styled.div`
    width: 100%;
    margin: 0;
    height: 200px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 4.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
`;

export const SplitDiv = styled(ChildDiv)`
    width: 47%;
`;

export const TriDiv = styled(ChildDiv)`
    width: 30%;
`;

export const NavDiv = styled(ChildDiv)``;
