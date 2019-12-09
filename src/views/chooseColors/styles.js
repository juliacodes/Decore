import styled from 'styled-components';
import { COLORS, FONTS, SmallHeading } from '../../Styling/Styling';

export const ChooseColorsWrapper = styled.div`
    max-width: 1200px;
    padding: 50px 20px;
    margin: 0 auto;

    ${SmallHeading} {
        font-family: ${FONTS.primary};
        font-weight: 400;
        font-size: 20px;
        color: ${COLORS.mediumGray};
    }
`;

export const Heading = styled.h2`
    color: ${COLORS.mediumGray};
    font-size: 20px;
    font-weight: 500;
    font-family: ${FONTS.primary};
    margin-bottom: 30px;
`;

export const TemplateColors = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 100px;
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
    position: absolute;
    top: 100%;
    left: ${props => props.left}px;
    transform: translateX(-25%);
    display: ${props => (props.display ? 'block' : 'none')};

    &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 12px solid transparent; /* left arrow slant */
        border-right: 12px solid transparent; /* right arrow slant */
        border-bottom: 12px solid white; /* bottom, add background color here */
        font-size: 0;
        line-height: 0;
        left: 50%;
        top: -12px;
        transform: translateX(-17px);
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;
`;

export const ColorButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.backgroundColor};
    height: 60px;
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
