import styled from 'styled-components';
import { QUERIES } from '../../Styling';

export const ImageDiv = styled.div`
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: white;
    box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.05);
`;

export const FlexLeft = styled.div`
    width: 100%;

    @media (${QUERIES.medium}) {
        width: 30%;
    }
`;

export const FlexRight = styled.div`
    width: 100%;

    @media (${QUERIES.medium}) {
        width: 30%;
    }

    div {
        width: 100%;
        height: 500px;
        margin: 0 auto;
        background-color: white;
        box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.05);
    }
`;

export const FlexCenter = styled.div`
    width: 100%;

    @media (${QUERIES.medium}) {
        width: 30%;
    }

    div {
        width: 100%;
        height: 500px;
        margin: 0 auto;
        background-color: white;
        box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.05);
    }
`;
