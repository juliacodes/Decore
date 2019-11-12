import styled from 'styled-components';
import { COLORS } from '../../Styling/Styling';

export const EditorWrapper = styled.div`
    background-color: ${COLORS.lightBlue};
    width: 100%;
`;

export const BuildChild = styled.div`
    width: 70%;
    margin: 20px auto;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ChildDiv = styled.div`
    width: 100%;
    margin: 0;
    height: 100px;
    background-color: white;
    border: 1.5px dashed #bdbdbd;
    box-sizing: border-box;
    border-radius: 4.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const SplitDiv = styled(ChildDiv)`
    width: 47%;
`;

export const NavDiv = styled(ChildDiv)`
    height: 50px;
`;
