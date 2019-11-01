import React from 'react';
import { LayoutInner, Layout } from './Components/Layout';
import Navbar from './Components/Navbar';
import RightBar from './Components/RightBar';

const App = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <RightBar />
        </LayoutInner>
    </Layout>
);

export default App;
