import React from 'react';
import { LayoutInner, Container } from '../Layout';
import { FlexLeft, FlexRight, Image } from '../FlexSplit';
import { SubHeading, Paragraph, HeadingLight } from '../../Styling';
import code from '../../images/landing/code.jpg';

const DevRow = () => (
    <LayoutInner>
        <Container style={{ height: 'unset' }}>
            <FlexLeft>
                {' '}
                <SubHeading>Built For Developers</SubHeading>
                <Paragraph>
                    As developers, we know how time consuming setting up a
                    project can be, and we want to to simplify this process for
                    you.
                </Paragraph>
                <Container style={{ height: 'unset', margin: '50px 0' }}>
                    <FlexLeft style={{ width: '50%' }}>
                        <HeadingLight>Clean Code</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Our templates come with cleanly written code that
                            you can build off of.
                        </Paragraph>
                    </FlexLeft>
                    <FlexRight style={{ width: '50%' }}>
                        <HeadingLight>SEO Analytics</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Meta tags and descriptions can be time consuming, so
                            we do it for you.
                        </Paragraph>
                    </FlexRight>
                </Container>
                <Container style={{ height: 'unset' }}>
                    <FlexLeft style={{ width: '50%' }}>
                        <HeadingLight>Color Variables</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Get started with a palette of colors that you can
                            easily apply across your site
                        </Paragraph>
                    </FlexLeft>
                    <FlexRight style={{ width: '50%' }}>
                        <HeadingLight>Font Setup</HeadingLight>
                        <Paragraph style={{ maxWidth: 150 }}>
                            Set your font at the beginning, and we'll use google
                            to apply it for you
                        </Paragraph>
                    </FlexRight>
                </Container>
            </FlexLeft>
            <FlexRight>
                <Image src={code} alt="code" />
            </FlexRight>
        </Container>
    </LayoutInner>
);

export default DevRow;
