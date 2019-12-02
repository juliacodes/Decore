import styled from 'styled-components';
import { COLORS, FONTS, Button } from '../../Styling/Styling';
import { FlexLeft, FlexRight } from '../../Components/FlexSplit/FlexSplit';

export const BuilderWrapper = styled.div`
    display: flex;

    ${Button} {
        margin: 0;
        padding: 0;
        width: 73px;
        height: 31px;
    }
`;

export const Heading = styled.h2`
    color: ${COLORS.black};
    font-size: 20px;
    font-weight: 500;
    font-family: ${FONTS.primary};
    margin-bottom: 5px;
`;

export const Edit = styled.button`
    display: inline-block;
    border: none;
    background-color: rgba(132, 211, 242, 0.2);
    padding: 5px 15px;
    border-radius: 18px;
    color: ${COLORS.darkBlue};
    font-weight: bold;
    cursor: pointer;
    float: right;
`;


export const ModalRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;

    ${FlexLeft} {
        width: 90%;
    }

    ${FlexRight} {
        width: 10%;

        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            transform: scale(0.7);
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }

        .slider:before {
            position: absolute;
            content: '';
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }

        input:checked + .slider {
            background-color: #6c63ff;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    }
`;

export const SettingType = styled.p`
    color: ${COLORS.slate};
    font-size: 20px;
    margin: 20px 0 5px 0;
    padding: 0;
`;
export const SettingVal = styled.p`
    color: ${COLORS.mediumGray};
    font-size: 15px;
    max-width: 300px;
`;
