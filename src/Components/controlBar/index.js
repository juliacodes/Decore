import React from 'react';
import ControlSideBar from './styles';

export default class ControlBar extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <ControlSideBar>
                <p>Control Bar</p>
            </ControlSideBar>
        );
    }
}
