import styled from 'styled-components';
import { COLORS, QUERIES, Button, FONTS } from '../../Styling/Styling';

export const ChooseTheme = styled.div`
    min-height: 100vh;
    @media screen and (${QUERIES.medium}) {
        overflow-y: hidden;
    }
`;

export const ChooseThemeLayout = styled.div`
    max-width: 1000px;
    height: auto;
    margin: -35px auto 0 auto;
    padding: 0 25px;
    text-align: center;
    @media screen and (${QUERIES.large}) {
        margin: -75px auto 0 auto;
    }
    h1 {
        margin: 0;
    }
    ${Button} {
        margin: 50px 0;
    }
    alt {
        position: relative;
        display: block;
        span {
            color: ${COLORS.deepPurple};
            text-decoration: underline;
        }
        &:before,
        &:after {
            content: '';
            position: absolute;
            width: 100px;
            height: 1px;
            background-color: #dedede;
            top: 60%;
        }
        &:before {
            transform: translateX(-150%);
        }
        &:after {
            transform: translateX(50%);
        }
    }
`;

export const ThemeWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 30px 0 0 0;
    z-index: 20;
    height: 100%;
    @media only screen and (${QUERIES.medium}) {
        flex-direction: row;
        margin: 0 0 30px 0;
    }
`;

export const Theme = styled.div`
    flex: 1 0 auto;
    height: 325px;
    max-width: unset;
    margin: 15px 0;
    border: 1px solid transparent;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.07);
    background-color: white;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    @media only screen and (${QUERIES.medium}) {
        height: 375px;
        margin: 0 5px;
        max-width: 330px;
    }
    &.selected {
        border-color: ${COLORS.darkBlue};
        z-index: 2;
        @media only screen and (${QUERIES.medium}) {
            transform: scale(1.2);
            border-color: transparent;
        }
    }

    p {
        color: #3f3d56;
        font-weight: 500;
        font-size: 30px;
    }

    .features {
        line-height: 40px;
        font-size: 15px;
        font-weight: 700;
        color: ${COLORS.deepPurple};

        > span {
            color: ${COLORS.mediumGray};
            font-weight: 500;
        }
    }
`;

export const ShortHero = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background-color: ${props => props.background};
    height: 300px;
    @media screen and (min-width: ${QUERIES.large}) {
        height: 400px;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const CardHeading = styled.h2`
    color: ${COLORS.mediumGray};
    font-size: 30px;
    line-height: 20px;
    font-weight: 500;
    font-family: ${FONTS.primary};
`;
