import React from 'react';
import styled from 'styled-components';
import { Container, LayoutInner } from '../Layout';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';

import { COLORS, QUERIES, SubHeading, Button } from '../../Styling';

const FooterContainer = styled(Container)`
    ${FlexLeft} {
        width: 30%;
    }

    ${FlexRight} {
        width: 30%;
    }

    ${Button} {
        background-color: #ffcc57;
        color: #fff;
        float: right;
        width: 220px;
    }

    ${SubHeading} {
        max-width: 200px;
        color: white;
    }
`;

const Footer = () => (
    <LayoutInner>
        <FooterContainer>
            <FlexLeft>
                <SubHeading>Start Building Today</SubHeading>
            </FlexLeft>
            <FlexRight>
                <Button>Launch Builder &#10230;</Button>
            </FlexRight>
        </FooterContainer>
    </LayoutInner>
);

export default Footer;
