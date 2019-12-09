import styled from 'styled-components';
import { COLORS } from '../../Styling/Styling';
import editsvg from '../../images/edit.svg';
import deletesvg from '../../images/delete.svg';

export const SettingsButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    content: '';
    cursor: pointer;
    z-index: 1;

    svg path {
        transition: 0.3s;
    }

    svg:hover {
        path {
            fill: ${COLORS.deepBlue};
        }
    }

    &.active-controls {
        svg {
            path {
                fill: ${COLORS.deepBlue};
            }
        }
    }
`;

export const SettingsPopup = styled.div`
    content: '';
    position: absolute;
    top: 45px;
    right: -80px;
    width: 100px;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5.80247px;
    display: block;
    line-height: 30px;
    z-index: 1;
    opacity: 0;
    transform: translateX(20px);
    transition: 0.3s ease;
    pointer-events: none;

    &.active-popup {
        opacity: 1;
        transform: translateY(0px);
        pointer-events: all;
    }

    p {
        margin: 0 0 0 20px;
    }
`;

export const Edit = styled.div`
    background-image: url(${editsvg});
    background-position: left center;
    background-repeat: no-repeat;
`;

export const Delete = styled.div`
    color: #E40101;
    background-image: url(${deletesvg});
    background-position: left center;
    background-repeat: no-repeat;
`;
