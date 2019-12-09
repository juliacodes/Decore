import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling/Styling';

export const EditorWrapper = styled.div`
    background-color: ${COLORS.lightGray};
    width: 100%;
    min-height: 100vh;

    @media (${QUERIES.medium}) {
        width: calc(100% - 320px);
    }
`;

export const BuildChildCont = styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition-duration: 0.3s;
    border: 2px solid transparent;
    cursor: grab;
    color: #636363;
    @media (${QUERIES.medium}) {
        width: 80%;
    }
`;

export const ChildDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
    height: 200px;
    background-color: white;
    box-sizing: border-box;
    border-radius: 4.5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
    border: 3px solid transparent;
    transition: 0.3s ease;

    svg {
        margin-top: 50px;
    }

    span {
        display: block;
        width: 100%;
        height: 70px;
        text-align: center;
    }
`;

export const SplitDiv = styled(ChildDiv)`
    width: 47%;

    img {
        height: 70px;

        @media (${QUERIES.medium}) {
            height: 120px;
        }
    }

    .image {
        margin: 0;
    }
`;

export const ImageText = styled(SplitDiv)`
    height: 300px;
    svg {
        margin: 0;
        height: 200px;
    }
`;

export const TriDiv = styled(ChildDiv)`
    width: 30%;
`;

export const NavDiv = styled(ChildDiv)`
    height: 100px;
    span {
        display: block;
        width: 100%;
        height: auto;
        text-align: center;
    }
`;

export const NavDivCont = styled(NavDiv)`
    height: 100px;
    span {
        display: block;
        width: 100%;
        height: 70px;
        text-align: center;
    }
    display: flex;
    padding: 0 20px;
    div {
        width: 80%;
        font-size: 30px;
    }

    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
        width: 5%;
        font-size: 20px;
        text-decoration: underline;
    }
`;

export const CtaDiv = styled(ChildDiv)`
    height: 400px;

    svg {
        height: 200px;
        width: 100%;
        margin: 0;

        @media (${QUERIES.medium}) {
            height: 250px;
        }
    }
`;

export const FooterDiv = styled(ChildDiv)``;
