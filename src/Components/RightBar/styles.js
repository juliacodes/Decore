import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling';

export const Block = styled.div`
    width: 10%;
    height: 100vh;
    background-color: ${COLORS.deepBlue};
    position: fixed;
    right: 0;
    top: 0;
    transform: none;
    transition: transform 0.5s;
    display: none;

    @media (${QUERIES.medium}) {
        width: 30%;
        display: block;
    }
`;

export const ScrollCont = styled.div`
    transform: rotate(90deg);
    position: absolute;
    right: -5%;
    bottom: 250px;
    height: 30px;
    color: white;
    display: none;
    transition: opacity 0.5s 0.3s;

    p {
        display: inline-block;
        padding: 0;
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;

export const Line = styled.div`
    width: 150px;
    height: 1px;
    background-color: white;
    display: inline-block;
    margin: 0 30px 3px 0;
`;
