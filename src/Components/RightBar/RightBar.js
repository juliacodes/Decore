import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling';

const Block = styled.div`
    width: 10%;
    height: 100vh;
    background-color: ${COLORS.deepBlue};
    position: fixed;
    right: 0;
    top: 0;

    @media (${QUERIES.medium}) {
        width: 30%;
    }
`;

const ScrollCont = styled.div`
    transform: rotate(90deg);
    position: absolute;
    right: -5%;
    bottom: 250px;
    height: 30px;
    color: white;
    display: none;

    p {
        display: inline-block;
        padding: 0;
    }

    @media (${QUERIES.medium}) {
        display: block;
    }
`;

const Line = styled.div`
    width: 150px;
    height: 1px;
    background-color: white;
    display: inline-block;
    margin: 0 30px 3px 0;
`;

const RightBar = () => (
    <Block>
        <ScrollCont>
            <Line />
            <p>Scroll Down</p>
        </ScrollCont>
    </Block>
);

export default RightBar;
