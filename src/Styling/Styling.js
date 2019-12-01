import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`
};

export const COLORS = {
    yellow: '#FDBE6F',
    deepBlue: '#5442F8',
    lightBlue: '#e7f6fd',
    palePink: '#F1DDE8',
    paleBlue: '#E6EFFE'
};

export const Heading = styled.h1`
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;

    @media (${QUERIES.medium}) {
        font-size: 60px;
    }
`;

export const SubHeading = styled.h2`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
    color: #999;

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
    color: #929090;
    font-size: 25px;
`;

export const Button = styled.button`
    width: 130px;
    height: 46px;
    background: ${COLORS.lightBlue};
    font-size: 13.5666px;
    line-height: 17px;
    border-radius: 18px;
    color: ${COLORS.deepBlue};
    border: 1px solid ${COLORS.deepBlue};
    margin-top: 40px;
`;
