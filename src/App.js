import React from 'react';
import { LayoutInner, Layout, Container } from './Components/Layout';
import { FlexLeft, FlexRight } from './Components/FlexSplit';
import { Heading, Paragraph, Button } from './Styling';

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
    </Layout>
);

export default App;
