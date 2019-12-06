/* eslint-disable react/no-unused-state */
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
            builds: buildData.blank
        };
    }

    componentDidMount() {
        const themeStorage = localStorage.getItem('theme');
        const theme = buildData[themeStorage];
        this.setState({ builds: theme });
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
