import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`
};

export const FONTS = {
    primary: 'Muli',
    secondary: 'Muli',
    tertiary: 'Oswald'
};

export const COLORS = {
    yellow: '#FDBE6F',
    darkBlue: '#005EFD',
    deepBlue: '#5442F8',
    lightBlue: '#e7f6fd',
    palePink: '#F1DDE8',
    paleBlue: '#E6EFFE',
    mediumGray: '#757575',
    border: '#EBEBEB',
    deepPurple: '#645CFF',
    lightPurple: 'rgba(108, 99, 255, 0.53)',
    lightGray: '#F5F5F5',
    slate: '#505050'
};

export const Heading = styled.h1`
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;

    @media (${QUERIES.medium}) {
        font-size: 60px;
    }
`;

export const SmallHeading = styled.h1`
    font-family: ${props => props.fontFamily}, sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.fontColor};
    font-weight: bold;
`;

export const SubHeading = styled.h2`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;

    @media (${QUERIES.medium}) {
        font-size: 50px;
    }
`;

export const HeadingLight = styled.h3`
    font-weight: 400;
    font-size: 20px;
    margin: 30px 0;

    @media (${QUERIES.medium}) {
        font-size: 25px;
    }
`;

export const Paragraph = styled.p`
    color: ${COLORS.mediumGray};
    font-size: 15px;
    line-height: 20px;
`;

export const Button = styled.button`
    width: 130px;
    height: 46px;
    background: ${COLORS.lightBlue};
    font-size: 13.5666px;
    line-height: 17px;
    border-radius: 18px;
    color: ${COLORS.deepBlue};
    border: none;
    margin-top: 40px;
    cursor: pointer;
`;
