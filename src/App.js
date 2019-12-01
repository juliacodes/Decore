import React from 'react';
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
                    <Heading>404 :(</Heading>
                    <SubHeading>oops!</SubHeading>
                    <Paragraph>
                        We can't seem to be able to find the page you are
                        looking for!{' '}
                    </Paragraph>
                    <Button>Go back</Button>
                </FlexLeft>
            </Container>
        </LayoutInner>
    </Layout>
);

export default App;
