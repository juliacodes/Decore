import React from 'react';
import { LayoutInner, Layout, Container } from './Components/Layout';
import { FlexLeft, FlexRight } from './Components/FlexSplit';
import { Heading } from './Styling';

import Navbar from './Components/Navbar';
import RightBar from './Components/RightBar';

const App = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <Container>
                <FlexLeft>
                    <Heading>Lorem ipsum dolor sit amet. </Heading>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                </FlexLeft>
                <FlexRight>
                    <div />
                </FlexRight>
            </Container>
            <RightBar />
        </LayoutInner>
    </Layout>
);

export default App;
