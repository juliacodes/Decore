import styled from 'styled-components/macro';
import { Container } from '../Layout';
import { FlexLeft, FlexRight, FlexCenter } from '../FlexSplit';
import { SubHeading, QUERIES } from '../../Styling';

const TriContainer = styled(Container)`
    width: 100%;
    height: auto;
    margin: 0 auto;
    justify-content: space-between;
    align-items: unset;
    padding: 0;

    ${FlexLeft}, ${FlexCenter}, ${FlexRight} {
        width: 100%;
        margin: 0;

        @media (${QUERIES.medium}) {
            width: 30%;
        }
    }

    img{
        width: 300px;
        margin: 20px auto;

        @media (${QUERIES.medium}) {
            width: 80%;
        }
    }

    ${FlexRight} {
        width: 20%;
        padding: 0;
    }

    ${FlexLeft} {
        transform: none;

        @media (${QUERIES.medium}) {
        transform: translate(0, -180px);
        }
    }

    div {
        padding: 20px 0;
        text-align: center;
        ${SubHeading} {
            font-size: 30px;
            font-weight: normal;
            text-transform: none;
        }

        @media (${QUERIES.medium}) {
           padding: 20px;
        }
    }

    @media (${QUERIES.medium}) {
        width: 65%;
        margin: 60px auto 0 auto;
        padding: 0;
    }
`;

export default TriContainer;
