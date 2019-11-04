import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`
};

export const COLORS = {
    yellow: '#FDBE6F',
    deepBlue: '#5442F8',
    lightBlue: '#e7f6fd'
};

export const Heading = styled.h1`
    font-size: 40px;
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

    @media (${QUERIES.medium}) {
        font-size: 50px;
    }
`;

export const Paragraph = styled.p`
    color: #929090;
    font-size: 15px;
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
`;
