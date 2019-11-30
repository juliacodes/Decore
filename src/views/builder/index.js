import React from 'react';
import Editor from '../../Components/editor';
import ControlBar from '../../Components/controlBar';
import Modal from '../../Components/modal';
import {BuilderWrapper, Heading} from './styles';



export default class Builder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {
                projectName: '',
                projectDesc: '',
                projectMeta: ''
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
