import styled from 'styled-components';

export const COLORS = {
    yellow: '#FDBE6F',
    darkBlue: '#005EFD',
    deepBlue: '#5442F8',
    lightBlue: '#e7f6fd',
    mediumGray: '#8F8F8F'
};

export const FONTS = {
    primary: 'Inter',
    secondary: 'Muli',
    tertiary: 'Oswald'
};

export const Heading = styled.h1`
    font-size: 80px;
    font-weight: 700;
`;

export const SmallHeading = styled.h1`
    font-family: ${props => props.fontFamily}, sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.fontColor};
    font-weight: bold;
`;

export const Paragraph = styled.p`
    color: #929090;
    font-size: 15px;
`;

export const Button = styled.button`
    display: inline-block;
    height: 40px;
    width: 140px;
    background-color: ${props => props.background};
    border-radius: 20px;
    color: ${props => props.color};
    border: none;
    margin: ${props => props.margin};
    font-weight: 500;
    transition: 0.3s ease;
    font-family: ${props => props.fontFamily}, sans-serif;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.hoverBackground};
        color: ${props => props.hoverColor};
    }
`;

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`
};
