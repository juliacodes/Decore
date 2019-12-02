import styled from 'styled-components';
import { keyframes } from 'styled-components/macro';
import { COLORS } from '../../Styling/Styling';
import settings from '../../images/settings.svg';
import editsvg from '../../images/edit.svg';
import deletesvg from '../../images/delete.svg';

export const SettingsButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-image: url(${settings});
    background-position: center center;
    background-size: 80%;
    background-repeat: no-repeat;
    display: block;
    content: '';
    cursor: pointer;
`;

export const fadein = keyframes`
0%{
    opacity: 0;
    transform: translateX(20px);
}

100%{
    opacity: 1;
    transform: translateY(0px);

}
`;

export const SettingsPopup = styled.div`
    width: 100px;
    padding: 10px;
    position: absolute;
    top: 45px;
    right: -80px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5.80247px;
    display: block;
    content: '';
    line-height: 30px;
    animation: ${fadein} 0.3s ease-in-out forwards;

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
    color: #fe8f8f;
    background-image: url(${deletesvg});
    background-position: left center;
    background-repeat: no-repeat;
`;
