import React from 'react';
import FontPicker from 'font-picker-react';
import styled from 'styled-components';

const FontPickerCont = styled.div`
    margin-bottom: 80px;

    #font-picker {
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
        background-color: white;
        border-radius: 30px;
    }
    div[id^='font-picker'] .dropdown-button {
        background-color: white;
        border-radius: 30px;
    }

    div[id^='font-picker'] .dropdown-button:hover,
    div[id^='font-picker'] .dropdown-button:focus {
        background-color: white;
        border-radius: 30px;
    }
    div[id^='font-picker'] ul li button.active-font {
        background-color: white;
    }

    div[id^='font-picker'] ul {
        background-color: white;
        margin-top: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    }
`;

export default class Font extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFont: 'Montserrat'
        };
    }

    render() {
        const { activeFont } = this.state;
        return (
            <FontPickerCont>
                <FontPicker
                    apiKey="AIzaSyCZwT9nkGdLqU1uuAwJvStcwtOp_x9s_60"
                    activeFontFamily={activeFont}
                    onChange={nextFont =>
                        this.setState({
                            activeFont: nextFont.family
                        })
                    }
                />
            </FontPickerCont>
        );
    }
}
