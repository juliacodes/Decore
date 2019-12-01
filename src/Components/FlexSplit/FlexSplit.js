import styled from 'styled-components';
import { QUERIES } from '../../Styling';

export const ImageDiv = styled.div`
    margin: 0 auto;
    height: 400px;
    box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img`
    width: 100%;
    margin: 0 auto;
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
        width: 35%;
    }

    div {
        width: 100%;
        height: 440px;
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

    img {
        width: 100%;
        height: 100%;
    }

    div {
        width: 100%;
        height: auto;
        margin: 0 auto;
        background-color: white;
        box-shadow: -5px 5px 30px rgba(0, 0, 0, 0.05);
    }
`;
