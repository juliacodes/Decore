import React from 'react';
import Editor from '../../Components/editor';
import ControlBar from '../../Components/controlBar';
import Modal from '../../Components/modal';
import Switch from '../../Components/Switch'
import {BuilderWrapper, Heading, Edit} from './styles';




export default class Builder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {
                projectName: 'Hello World App',
                projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, etiam non purus euismod.',
                projectMeta: 'Include tags with your title and description to help with search engine optimization'
            }
        };
        this.settingsModal = React.createRef();
    }

    openModal = () => {
        this.settingsModal.current.toggleModal(true);
    };

    handleSettingsChange = event => {
        const { settings } = { ...this.state };
        const currentState = settings;

        const { name, value } = event.target;
        currentState[name] = value;

        this.setState({ settings: currentState });
    };

    render() {
        const { settings } = this.state;
        return (
            <BuilderWrapper>
                <Modal ref={this.settingsModal} title="Settings">
                    <div>
                        <label htmlFor="projectName">
                           <Heading>Project Name</Heading>
                           <Edit>Edit</Edit>
                            <input
                                type="text"
                                name="projectName"
                                id="projectName"
                                value={settings.projectName}
                                onChange={this.handleSettingsChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="projectDesc">
                            <Heading>Project Desc</Heading>
                            <Edit>Edit</Edit>
                            <input
                                type="text"
                                name="projectDesc"
                                id="projectDesc"
                                value={settings.projectDesc}
                                onChange={this.handleSettingsChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="projectMeta">
                            <Heading>Meta Tags</Heading>
                            <Switch></Switch>
                            <input
                                type="text"
                                name="projectMeta"
                                id="projectMeta"
                                value={settings.projectMeta}
                                onChange={this.handleSettingsChange}
                            />
                        </label>
                    </div>
                </Modal>
                <Editor />
                <ControlBar handleModal={this.openModal} />
            </BuilderWrapper>
        );
    }
}
