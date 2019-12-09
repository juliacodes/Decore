import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, SubHeading, Paragraph, Button } from '../../Styling';
import { LayoutInner, Layout, Container } from '../../Components/Layout';
import { FlexLeft } from '../../Components/FlexSplit';
import Navbar from '../../Components/Navbar';

const ErrorPage = () => (
    <Layout>
        <LayoutInner>
            <Navbar />
            <Container>
                <FlexLeft>
                    <Heading>404 :(</Heading>
                    <SubHeading>oops!</SubHeading>
                    <Paragraph>
                        We cannot seem to be able to find the page you are
                        looking for!{' '}
                    </Paragraph>
                    <Link to='/'>
                        <Button>Go back</Button>
                    </Link>
                </FlexLeft>
            </Container>
        </LayoutInner>
    </Layout>
);

export default ErrorPage;
