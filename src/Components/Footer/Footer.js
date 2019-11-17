import React from 'react';
import styled from 'styled-components';
import { Container, LayoutInner } from '../Layout';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';

import { COLORS, QUERIES, SubHeading, Button, Paragraph } from '../../Styling';

// import { HorizontalLine } from '../HorizontalLine';

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

const HorizontalLine = styled.hr`
    color: #b2b2b2;
    opacity: 0.3;
    width: 80%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const ThisSubHeading = styled(SubHeading)`
    font-size: 18px;
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
            <HorizontalLine />
            <FlexLeft>
                <ThisSubHeading>Logo</ThisSubHeading>
            </FlexLeft>
            <FlexRight></FlexRight>
        </FooterContainer>
    </LayoutInner>
);

export default Footer;
