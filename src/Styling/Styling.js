import styled from 'styled-components';

export const COLORS = {
    yellow: '#FDBE6F',
    deepBlue: '#5442F8',
    lightBlue: '#e7f6fd'
};

export const Heading = styled.h1`
    font-size: 80px;
    font-weight: 700;
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

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`
};
