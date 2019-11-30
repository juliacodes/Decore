import styled from 'styled-components';
import { COLORS, FONTS, Button } from '../../Styling/Styling';

export const BuilderWrapper = styled.div`
    display: flex;
`;

export const Heading = styled.h2`
    color: ${COLORS.black};
    font-size: 20px;
    font-weight: 500;
    font-family: ${FONTS.primary};
    margin-bottom: 5px;
`;

export const Edit = styled.button`
    display: inline-block;
    border: none;
    background-color: rgba(132, 211, 242, 0.2);
    padding: 5px 15px;
    border-radius: 18px;
    color: ${COLORS.darkBlue};
    font-weight: bold;
    cursor: pointer;
    float: right;
`;




