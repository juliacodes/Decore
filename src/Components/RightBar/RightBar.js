import React from 'react';
import styled from 'styled-components';
import COLORS from '../../Styling/Colors';

const Block = styled.div`
    width: 400px;
    height: 100vh;
    background-color: ${COLORS.deepBlue};
    position: absolute;
    right: 0;
    top: 0;
`;

const RightBar = () => <Block />;

export default RightBar;
