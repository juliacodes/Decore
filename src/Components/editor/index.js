import React from 'react';
// import NavBar from '../editorElements/navbar';
import Dragula from 'react-dragula';
import {
    EditorWrapper,
    BuildChild,
    SplitDiv,
    ChildDiv,
    NavDiv
} from './styles';
import buildData from '../../store/buildData';

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
            <EditorWrapper ref={this.dragulaDecorator}>
                {builds.map(build => {
                    if (build.type === 'split-div') {
                        return (
                            <BuildChild>
                                <SplitDiv>{build.type}</SplitDiv>
                                <SplitDiv>{build.type}</SplitDiv>
                            </BuildChild>
                        );
                    }
                    if (build.type === 'nav') {
                        return (
                            <BuildChild>
                                <NavDiv>{build.type}</NavDiv>
                            </BuildChild>
                        );
                    }
                    return (
                        <BuildChild>
                            <ChildDiv>{build.type}</ChildDiv>
                        </BuildChild>
                    );
                })}
            </EditorWrapper>
        );
    }
}
