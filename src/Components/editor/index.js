import React from 'react';
import EditorWrapper from './styles';

export default class Editor extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <EditorWrapper>
                <p>Editor</p>
            </EditorWrapper>
        );
    }
}
