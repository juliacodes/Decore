/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import AnimateIn from './AnimateIn';

export const CircleCont = styled.svg`
    position: absolute;
    top: ${props => props.topPosition || '50%'};
    left: ${props => props.leftPosition || '35%'};
    animation: ${AnimateIn} 0.5s forwards;
`;
export const DotCont = styled.svg`
    position: absolute;
    top: ${props => props.top || '85%'};
    left: ${props => props.left || '60%'};
    animation: ${AnimateIn} 0.5s forwards;
`;
export const TriCont = styled.svg`
    position: absolute;
    top: ${props => props.topPosition || '17%'};
    left: ${props => props.leftPosition || '55%'};
    animation: ${AnimateIn} 0.5s forwards;
`;

export const Circle = ({ topPosition, leftPosition, colorStroke }) => {
    return (
        <CircleCont
            topPosition={topPosition}
            leftPosition={leftPosition}
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="5.5"
                cy="5.5"
                r="4.5"
                stroke={colorStroke}
                strokeWidth="2"
            />
        </CircleCont>
    );
};

export const Triangle = ({ topPosition, leftPosition, colorStroke }) => {
    return (
        <TriCont
            topPosition={topPosition}
            leftPosition={leftPosition}
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.99051 6.19199L16.6464 9.5041L6.45008 20.5404L1.99051 6.19199Z"
                stroke={colorStroke}
                strokeWidth="2"
            />
        </TriCont>
    );
};

export const Dot = ({ colorStroke }) => {
    return (
        <DotCont
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="4" cy="4" r="4" fill={colorStroke} fillOpacity="0.61" />
        </DotCont>
    );
};
