import React from 'react';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling';

const NavContainer = styled.div`
    width: 171px;
    height: 171px;
    background-color: ${COLORS.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;

    p {
        color: white;
        font-size: 20px;
    }

    @media (${QUERIES.medium}) {
        position: absolute;
    }
`;

const Navbar = () => (
    <NavContainer>
        <p>Logo</p>
    </NavContainer>
);

export default Navbar;
