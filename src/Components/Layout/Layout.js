import styled from 'styled-components';
import { QUERIES } from '../../Styling';

export const Layout = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
`;

export const LayoutInner = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto 80px auto;
    position: relative;
    justify-content: center;
`;

export const FullWidthContainer = styled.div``;
export const Container = styled.div`
    width: 100% - 30px;
    height: 100%;
    display: flex;
    padding: 30px;
    z-index: 2;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (${QUERIES.medium}) {
        flex-wrap: nowrap;
        padding: 0;
    }
`;
