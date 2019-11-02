import React from 'react';
import Editor from '../../Components/editor';
import ControlBar from '../../Components/controlBar';
import BuilderWrapper from './styles';

export default class Builder extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    handleTest = () => {};

    render() {
        return (
            <BuilderWrapper>
                <Editor />
                <ControlBar />
            </BuilderWrapper>
        );
    }
}
