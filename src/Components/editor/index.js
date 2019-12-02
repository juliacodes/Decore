import React from 'react';
// import NavBar from '../editorElements/navbar';
import Dragula from 'react-dragula';
import { EditorWrapper } from './styles';
import buildData from '../../store/buildData';
import BuildChild from '../BuildChild';

export default class Editor extends React.Component {
    constructor() {
        super();

        this.state = {
            builds: buildData.builds
        };
    }

    dragulaDecorator = BuildChild => {
        if (BuildChild) {
            Dragula([BuildChild], [BuildChild]);
        }
    };

    render() {
        const { builds } = this.state;
        return (
            <EditorWrapper className="editor" ref={this.dragulaDecorator}>
                {builds.map(build => {
                    return <BuildChild name={build.type} />;
                })}
            </EditorWrapper>
        );
    }
}
