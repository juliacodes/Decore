import styled from 'styled-components';
import { COLORS, QUERIES } from '../../Styling';

const NavContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${COLORS.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    p {
        color: white;
        font-size: 20px;
    }

    @media (${QUERIES.medium}) {
        width: 171px;
        height: 171px;
    }
`;

export default NavContainer;
