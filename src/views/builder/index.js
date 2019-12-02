import React from 'react';
import ReactDOM from 'react-dom';
import Editor from '../../Components/editor';
import ControlBar from '../../Components/controlBar';
import Modal from '../../Components/modal';
import BuilderWrapper from './styles';
import Element from '../../Components/controlBar/';
import { EditorWrapper } from '../../Components/editor/styles';

// var instance = ReactDOM.render(<Element />, document.getElementById("root"));

export default class Builder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {
                projectName: ''
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
                            Project Name
                            <input
                                type="text"
                                name="projectName"
                                id="projectName"
                                value={settings.projectName}
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
