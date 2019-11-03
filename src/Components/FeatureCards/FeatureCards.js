import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '../Layout';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';
import { SubHeading, Paragraph } from '../../Styling';

export const TriContainer = styled(Container)`
    width: 65%;
    height: auto;
    margin: 60px auto 0 auto;
    justify-content: space-between;
    align-items: unset;

    ${FlexLeft}, ${FlexCenter} {
        width: 30%;
    }

    ${FlexRight} {
        width: 20%;
    }

    ${FlexLeft} {
        transform: translate(0, -180px);
    }

    div {
        padding: 20px;
        text-align: center;
        ${SubHeading} {
            font-size: 30px;
            font-weight: normal;
            text-transform: none;
        }
    }
`;

const FeatureCards = () => (
    <TriContainer>
        <FlexLeft>
            <div>
                <SubHeading>Feature</SubHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, dolor sit amet{' '}
                </Paragraph>
            </div>
        </FlexLeft>
        <FlexCenter>
            <div>
                <SubHeading>Feature</SubHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, dolor sit amet{' '}
                </Paragraph>
            </div>
        </FlexCenter>
        <FlexRight />
    </TriContainer>
);

export default FeatureCards;
