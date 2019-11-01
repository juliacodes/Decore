import React from 'react';
import { LayoutInner, Layout } from './Components/Layout';
import Navbar from './Components/Navbar';

const App = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
        </LayoutInner>
    </Layout>
);

export default App;
