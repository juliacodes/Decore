/* eslint-disable react/no-unused-state */
import React from 'react';
// import NavBar from '../editorElements/navbar';
import Dragula from 'react-dragula';
import uuid from 'uuid';
import { EditorWrapper } from './styles';
import buildData from '../../store/buildData';
import BuildChild from '../BuildChild';

export default class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            builds: buildData.first
        };

        this.builder = React.createRef();
    }

    componentDidMount() {
        const themeStorage = localStorage.getItem('theme');
        const theme = buildData[themeStorage];
        if (theme) {
            this.setState({ builds: theme });
        }
    }

    dragulaDecorator = instance => {
        if (instance) {
            Dragula([instance], {
            });
        }
    };

    guidGenerator = () => {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    handleRemoveBuild = (uniqueID) => {
        this.setState(prevState => ({
            ...prevState,
            builds: this.state.builds.filter(el => el.uniqueID != uniqueID)
        }));
    }

    render() {
        const { builds } = this.state;
        return (
            <EditorWrapper className="editor" ref={this.dragulaDecorator}>
                {builds.map((build, index) => {
                    let uniqueID = this.guidGenerator();
                    build.uniqueID = uniqueID;
                    return <BuildChild ref={this.builder} name={build.type} key={index} id={uniqueID} handleRemoveBuild={this.handleRemoveBuild}/>;
                })}
            </EditorWrapper>
        );
    }
}
