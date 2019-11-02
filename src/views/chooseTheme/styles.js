import styled from 'styled-components';
import { COLORS } from "../../Styling/Styling";

export const ChooseThemeLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const ThemeWrapper = styled.div`
    display: flex;
    width: 650px;
    height: 120px;
    margin: 100px 0;
`;

export const Theme = styled.div`
    flex: 1;
    margin: 0 15px;
    border: 2px solid #BDBDBD;
    border-style: dashed;

    &.selected {
        border-color: ${COLORS.deepBlue}
    }
    /* background-image: url('${props => props.background}'); */
`;
