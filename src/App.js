import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, SubHeading, Paragraph, Button } from './Styling';
import { LayoutInner, Layout, Container } from './Components/Layout';
import { FlexLeft, FlexRight, ImageDiv } from './Components/FlexSplit';
import FeatureCards from './Components/FeatureCards';
import DevRow from './Components/DevRow';

import Navbar from './Components/Navbar';
import Shapes from './Components/BackgroundShapes';
import RightBar from './Components/RightBar';

import Footer from './Components/Footer';

const App = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <Shapes />
            <Container>
                <FlexLeft>
                    <Heading>Lorem ipsum dolor sit amet. </Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur{' '}
                    </Paragraph>
                    <Link to="/theme">
                        <Button>Launch</Button>
                    </Link>
                </FlexLeft>
                <FlexRight>
                    <ImageDiv />
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
        <DevRow />
        <Footer />
    </Layout>
);

export default App;
