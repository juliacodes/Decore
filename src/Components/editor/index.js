import React from 'react';
import { EditorWrapper, BuildChild, SplitDiv, ChildDiv } from './styles';
import buildData from '../../store/buildData';

export default class Editor extends React.Component {
    constructor() {
        super();

        this.state = {
            builds: buildData.builds,
            // eslint-disable-next-line react/no-unused-state
            build: buildData.builds[0]
        };
    }

    render() {
        const { builds } = this.state;
        return (
            <EditorWrapper>
                <p>Editor</p>
                {builds.map(build => {
                    // eslint-disable-next-line react/destructuring-assignment
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
