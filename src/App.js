import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, SubHeading, Paragraph, Button } from './Styling';
import { LayoutInner, Layout, Container } from './Components/Layout';
import { FlexLeft, FlexRight, Image } from './Components/FlexSplit';
import FeatureCards from './Components/FeatureCards';
import DevRow from './Components/DevRow';
import landingBuilder from './images/landing/landing-builder.jpg';

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
                    <Heading style={{ maxWidth: '400px' }}>
                        jump start your next web project{' '}
                    </Heading>
                    <Paragraph>
                        A custom layout generator built for developers
                    </Paragraph>
                    <Link to="/theme">
                        <Button>Launch</Button>
                    </Link>
                </FlexLeft>
                <FlexRight>
                    <Image src={landingBuilder} alt="landing builder" />
                </FlexRight>
            </Container>
            <RightBar />
        </LayoutInner>
        <LayoutInner>
            <Container style={{ height: 'unset' }}>
                <FlexLeft />
                <FlexRight>
                    <SubHeading>Don&apos;t Start From Scratch</SubHeading>
                    <Paragraph style={{ maxWidth: '400px' }}>
                        Begin coding your website without having to set up
                        layouts, fonts, colors, or even meta tags
                    </Paragraph>
                </FlexRight>
            </Container>
            <FeatureCards
                src1="color"
                src2="layout"
                h1="Custom Colors"
                h2="Build a Layout"
                p1="Set the font and accent colors of your layout"
                p2="Drag and drop any items you want"
            />
            <FeatureCards
                src1="template"
                src2="download"
                h1="Templates"
                h2="Download Files"
                p1="Choose any template you like to quickly get started"
                p2="Downlaod your zipped starter files"
            />
        </LayoutInner>
        <DevRow />
        <Footer />
    </Layout>
);

export default App;
