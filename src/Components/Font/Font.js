import React from 'react';
import FontPicker from 'font-picker-react';

export default class Font extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFont: ''
        };
    }

    render() {
        const { activeFont } = this.state;
        return (
            <FontPicker
                apiKey="AIzaSyCZwT9nkGdLqU1uuAwJvStcwtOp_x9s_60"
                activeFontFamily={activeFont}
                onChange={nextFont =>
                    this.setState({
                        activeFont: nextFont.family
                    })
                }
            />
        );
    }
}
