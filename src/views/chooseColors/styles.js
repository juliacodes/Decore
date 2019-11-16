import styled from 'styled-components';
import { COLORS, FONTS } from '../../Styling/Styling';

export const ChooseColorsWrapper = styled.div`
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const Heading = styled.h2`
    color: ${COLORS.mediumGray};
    font-size: 20px;
    font-weight: 500;
    font-family: ${FONTS.primary};
    margin-bottom: 30px;
`;

export const TemplateColors = styled.div`
    display: flex;
`;

export const Color = styled.div`
    background-color: ${props => props.background};
    width: 100px;
    height: 120px;
    cursor: pointer;

    &:nth-of-type(2n) {
        margin-right: 20px;
    }
`;

export const TemplateLink = styled.span`
    color: ${props => props.color};
    text-decoration: underline;
`;

export const Paragraph = styled.p`
    font-size: 16px;
    color: ${COLORS.mediumGray};
    font-family: ${FONTS.primary};
    max-width: 400px;
    line-height: 1.6;
`;

export const ColorPicker = styled.div`
    /* position: absolute; */
    /* bottom: 0; */
    /* left: 0; */
    display: ${props => (props.display ? 'block' : 'none')};
`;

export const ButtonGroup = styled.div`
    display: flex;
`;

export const Button = styled.div`
    border: 3px solid;
    background: ${props => props.backgroundColor};
    border-color: ${props => props.border};
    text-align: center;
    height: 60px;
    line-height: 60px;
    width: 170px;
    box-sizing: border-box;
    color: ${props => props.color};
    font-size: 16px;
    font-family: ${FONTS.primary};
    border-radius: 30px;
    margin-right: 20px;

    &:last-of-type {
        margin-right: 0;
    }
`;
