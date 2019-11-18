import React from 'react';
import styled from 'styled-components';
import { Container, LayoutInner } from '../Layout';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';

import { COLORS, QUERIES, SubHeading, Button, Paragraph } from '../../Styling';

// import { HorizontalLine } from '../HorizontalLine';
const LayoutInnerFooter = styled(LayoutInner)`
    max-width: 1500px;
    padding: 0 40px;
`;
const FooterContainer = styled(Container)`
    justify-content: space-between;

    ${FlexLeft} {
        width: 30%;

        ${Paragraph} {
            :nth-child(1) {
                color: white;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
    }

    ${FlexRight} {
        width: 30%;

        ${Paragraph} {
            :nth-child(1) {
                color: white;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
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
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const FooterContainerCol = styled(FooterContainer)`
    flex-direction: column;
    align-items: unset;
    width: 100%;
    margin: 0 auto;

    p {
        font-weight: 700;
        font-size: 30px;
        color: white;
    }
`;

const FooterContainerInner = styled(FooterContainer)`
    justify-content: left;
`;

const Footer = () => (
    <LayoutInnerFooter>
        <FooterContainer>
            <FlexLeft>
                <SubHeading>Start Building Today</SubHeading>
            </FlexLeft>
            <FlexRight>
                <Button>Launch Builder &#10230;</Button>
            </FlexRight>
        </FooterContainer>
        <FooterContainerCol>
            <HorizontalLine />
            <Paragraph>Logo</Paragraph>
        </FooterContainerCol>
        <FooterContainerInner>
            <FlexLeft>
                <Paragraph>Help & Support</Paragraph>
                <Paragraph>Help & Support</Paragraph>
                <Paragraph>Help & Support</Paragraph>
            </FlexLeft>
            <FlexRight>
                <Paragraph>Get in touch</Paragraph>
                <Paragraph>Feel free to reach out to us via email</Paragraph>
                <Paragraph>hello@App.com</Paragraph>
            </FlexRight>
        </FooterContainerInner>
    </LayoutInnerFooter>
);

export default Footer;
