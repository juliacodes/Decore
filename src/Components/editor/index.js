import React from 'react';
import { EditorWrapper, BuildChild, SplitDiv, ChildDiv } from './styles';
import buildData from '../../store/buildData';

export default class Editor extends React.Component {
    constructor() {
        super();

        this.state = {
            builds: buildData.builds
        };
    }

    render() {
        const { builds } = this.state;
        return (
            <EditorWrapper>
                <p>Editor</p>
                {builds.map(build => {
                    if (build.type === 'split-div') {
                        return (
                            <BuildChild>
                                <SplitDiv>{build.type}</SplitDiv>
                                <SplitDiv>{build.type}</SplitDiv>
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
