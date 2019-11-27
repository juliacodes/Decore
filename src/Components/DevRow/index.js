import React from 'react';
import { LayoutInner, Container } from '../Layout';
import { FlexLeft, FlexRight, ImageDiv } from '../FlexSplit';
import { SubHeading, Paragraph, HeadingLight } from '../../Styling';

const DevRow = () => (
    <LayoutInner>
        <Container style={{ height: 'unset' }}>
            <FlexLeft>
                {' '}
                <SubHeading>Built For Developers</SubHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                    sit amet, consectetur Lorem ipsum dolor sit amet,
                    consectetur
                </Paragraph>
                <Container style={{ height: 'unset', margin: '50px 0' }}>
                    <FlexLeft style={{ width: '50%' }}>
                        <HeadingLight>Feature</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Lorem ipsum dolor sit amet, dolor sit amet{' '}
                        </Paragraph>
                    </FlexLeft>
                    <FlexRight style={{ width: '50%' }}>
                        <HeadingLight>Feature</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Lorem ipsum dolor sit amet, dolor sit amet{' '}
                        </Paragraph>
                    </FlexRight>
                </Container>
                <Container style={{ height: 'unset' }}>
                    <FlexLeft style={{ width: '50%' }}>
                        <HeadingLight>Feature</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Lorem ipsum dolor sit amet, dolor sit amet{' '}
                        </Paragraph>
                    </FlexLeft>
                    <FlexRight style={{ width: '50%' }}>
                        <HeadingLight>Feature</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Lorem ipsum dolor sit amet, dolor sit amet{' '}
                        </Paragraph>
                    </FlexRight>
                </Container>
            </FlexLeft>
            <FlexRight>
                <ImageDiv />
            </FlexRight>
        </Container>
    </LayoutInner>
);

export default DevRow;
