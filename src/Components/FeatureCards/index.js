import React from 'react';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';
import { SubHeading, Paragraph } from '../../Styling';
import TriContainer from './styles';

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
