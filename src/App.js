import React from 'react';
import { LayoutInner, Layout, Container } from './Components/Layout';
import { FlexLeft, FlexRight } from './Components/FlexSplit';
import FeatureCards from './Components/FeatureCards';
import { Heading, SubHeading, Paragraph, Button } from './Styling';
import Navbar from './Components/Navbar';
import RightBar from './Components/RightBar';

const App = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <Container>
                <FlexLeft>
                    <Heading>Lorem ipsum dolor sit amet. </Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                    </Paragraph>
                    <Button>Launch</Button>
                </FlexLeft>
                <FlexRight>
                    <div />
                </FlexRight>
            </Container>
            <RightBar />
        </LayoutInner>
        <LayoutInner>
            <Container style={{ height: 'unset' }}>
                <FlexLeft />
                <FlexRight>
                    <SubHeading>Don&apos;t Start From Scratch</SubHeading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                    </Paragraph>
                </FlexRight>
            </Container>
            <FeatureCards />
            <FeatureCards />
        </LayoutInner>
        <LayoutInner>
            <Container style={{ height: 'unset' }}>
                <FlexLeft>
                    {' '}
                    <SubHeading>Built For Developers</SubHeading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                        dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                        consectetur
                    </Paragraph>
                </FlexLeft>
                <FlexRight />
            </Container>
        </LayoutInner>
    </Layout>
);

export default App;
