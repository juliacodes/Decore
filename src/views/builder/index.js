import React from 'react';
import Editor from '../../Components/Editor';
import ControlBar from '../../Components/ControlBar';
import Modal from '../../Components/Modal';
import {
    BuilderWrapper,
    ModalRow,
    CodeModalRow,
    CodeEditor,
    SettingType,
    SettingVal,
    SettingInput,
    SettingTextArea
} from './styles';
import { FlexLeft, FlexRight } from '../../Components/FlexSplit/FlexSplit';
import { Button, Paragraph } from '../../Styling';
import typeData from '../../store/typeData';

export default class Builder extends React.Component {
    constructor(props) {
        super(props);
        let items = JSON.parse(localStorage.getItem('items')); //gets item listing from local storage
        this.state = {
            settings: {
                projectName: 'Lorem ipsum',
                projectDescription:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, etiam non purus euismod.'
            },
            code: { items }
        };

        this.titleInput = React.createRef();
        this.descriptionInput = React.createRef();
        this.settingsModal = React.createRef();
        this.codeModal = React.createRef();
        this.editor = React.createRef();
    }

    // setting modal handler
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

    // code modal handler
    openCodeModal = () => {
        this.codeModal.current.toggleModal(true);
        let items = JSON.parse(localStorage.getItem('items')); //gets item listing from local storage
        this.setState({ code: { items } });
    };

    handleCodeChange = () => {
        const { code } = { ...this.state };
        const currentState = code;
        this.setState({ settings: currentState });
    };

    handleInput = e => {
        const { name } = e.target;
        e.persist();
        this.setState(prevState => ({
            ...prevState,
            settings: {
                [name]: e.target.value
            }
        }));
    };

    addBuilderElem = elem => {
        if (this.editor.current) {
            this.editor.current.addNewElem(elem);
        }
    };

    render() {
        const { settings, code } = this.state;
        return (
            <BuilderWrapper>
                <Modal ref={this.settingsModal} title='Preferences'>
                    <ModalRow>
                        <FlexLeft>
                            <SettingType>Project Title</SettingType>
                            <SettingInput
                                ref={this.titleInput}
                                type='text'
                                name='projectName'
                                value={settings.projectName}
                                onChange={this.handleInput}
                                aria-label='Project Name'
                            />
                        </FlexLeft>
                        <FlexRight>
                            <Button
                                onClick={() => this.titleInput.current.focus()}
                            >
                                Edit
                            </Button>
                        </FlexRight>
                    </ModalRow>
                    <ModalRow>
                        <FlexLeft>
                            <SettingType>Project Description</SettingType>
                            <SettingTextArea
                                ref={this.descriptionInput}
                                name='projectDescription'
                                aria-label='Project Description'
                                value={settings.projectDescription}
                                onChange={this.handleInput}
                            />
                        </FlexLeft>
                        <FlexRight>
                            <Button
                                onClick={() =>
                                    this.descriptionInput.current.focus()
                                }
                            >
                                Edit
                            </Button>
                        </FlexRight>
                    </ModalRow>
                    <ModalRow>
                        <FlexLeft>
                            <SettingType>Meta Tags</SettingType>
                            <SettingVal>
                                Include tags with your title and description to
                                help with search engine optimization
                            </SettingVal>
                        </FlexLeft>
                        <FlexRight>
                            <label className='switch' htmlFor='checkbox'>
                                Meta
                                <input
                                    type='checkbox'
                                    defaultChecked
                                    id='checkbox'
                                />
                                <span className='slider round' />
                            </label>
                        </FlexRight>
                    </ModalRow>
                </Modal>
                <Modal
                    modalType='codeModal'
                    ref={this.codeModal}
                    title='Code Export'
                >
                    <CodeModalRow>
                        <FlexLeft>
                            <Paragraph>HTML</Paragraph>
                            <CodeEditor>
                                <pre>
                                    <code>
                                        {`<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
`}{' '}
                                        {code.items.length > 0 &&
                                            code.items.map(
                                                ({ uniqueID, type }, index) => {
                                                    return (
                                                        <pre key={index}>
                                                            <code
                                                                key={uniqueID}
                                                            >
                                                                {`<div class="`}
                                                                {type}
                                                                {`"></div`}
                                                            </code>
                                                        </pre>
                                                    );
                                                }
                                            )}
                                        {`
    </body>
</html>`}
                                    </code>
                                </pre>
                            </CodeEditor>
                        </FlexLeft>
                        <FlexRight>
                            <Paragraph>CSS</Paragraph>
                            <CodeEditor>
                                <pre>
                                    <code>
                                        {code.items.map(
                                            ({ uniqueID, type }) => {
                                                return (
                                                    <pre>
                                                        <code key={uniqueID}>
                                                            {typeData[type].css}
                                                        </code>
                                                    </pre>
                                                );
                                            }
                                        )}
                                    </code>
                                </pre>
                            </CodeEditor>
                        </FlexRight>
                    </CodeModalRow>
                </Modal>
                <Editor ref={this.editor} />
                <ControlBar
                    handleModal={this.openModal}
                    handleCodeModal={this.openCodeModal}
                    addBuilderElem={this.addBuilderElem}
                />
            </BuilderWrapper>
        );
    }
}
