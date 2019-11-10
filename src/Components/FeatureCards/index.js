import React from 'react';
import { FlexLeft, FlexRight, FlexCenter, ImageDiv } from '../FlexSplit';
import { SubHeading, Paragraph } from '../../Styling';
import TriContainer from './styles';

const FeatureCards = () => (
    <TriContainer>
        <FlexLeft>
            <ImageDiv>
                <SubHeading>Feature</SubHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, dolor sit amet{' '}
                </Paragraph>
            </ImageDiv>
        </FlexLeft>
        <FlexCenter>
            <ImageDiv>
                <SubHeading>Feature</SubHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, dolor sit amet{' '}
                </Paragraph>
            </ImageDiv>
        </FlexCenter>
        <FlexRight />
    </TriContainer>
);

export default FeatureCards;
