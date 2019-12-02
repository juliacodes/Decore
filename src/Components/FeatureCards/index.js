/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FlexLeft, FlexRight, FlexCenter, ImageDiv } from '../FlexSplit';
import { SubHeading, Paragraph } from '../../Styling';
import TriContainer from './styles';

const FeatureCards = props => (
    <TriContainer>
        <FlexLeft>
            <ImageDiv>
                <SubHeading>{props.h1}</SubHeading>
                <Paragraph>{props.p1}</Paragraph>
                <img
                    alt={props.src1}
                    // eslint-disable-next-line global-require
                    src={require(`../../images/landing/${props.src1.toLowerCase()}.jpg`)}
                />
            </ImageDiv>
        </FlexLeft>
        <FlexCenter>
            <ImageDiv>
                <SubHeading>{props.h2}</SubHeading>
                <Paragraph>{props.p2}</Paragraph>
                <img
                    alt={props.src2}
                    // eslint-disable-next-line global-require
                    src={require(`../../images/landing/${props.src2.toLowerCase()}.jpg`)}
                />
            </ImageDiv>
        </FlexCenter>
        <FlexRight />
    </TriContainer>
);

export default FeatureCards;
