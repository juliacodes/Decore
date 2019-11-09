import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';

import { COLORS, QUERIES, SubHeading, Button } from '../../Styling';

const FooterContainer = styled(Container)`
    height: 500px;

    ${FlexLeft} {
        width: 30%;
    }

    ${FlexRight} {
        width: 30%;
    }

    ${Button} {
        background-color: #ffcc57;
        color: #fff;
    }
`;

const Footer = () => (
    <FooterContainer>
        <FlexLeft>
            <SubHeading>
                Start
                <br />
                Building
                <br />
                Today
            </SubHeading>
        </FlexLeft>
        <FlexRight>
            <Button>Launch Builder -></Button>
        </FlexRight>
    </FooterContainer>
);

export default Footer;
