import React from 'react';
import { connect } from 'react-redux';
import { changePreference } from '../../actions/preferences';
import Editor from '../../Components/Editor';
import ControlBar from '../../Components/ControlBar';
import Modal from '../../Components/Modal';
import typeData from '../../store/typeData';
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

class Builder extends React.Component {
    constructor(props) {
        super(props);
        const items = JSON.parse(localStorage.getItem('items')); // gets item listing from local storage
        this.state = {
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
        const items = JSON.parse(localStorage.getItem('items')); // gets item listing from local storage
        this.setState({ code: { items } });
    };

    handleCodeChange = () => {
        const { code } = { ...this.state };
        const currentState = code;
        this.setState({ settings: currentState });
    };

    handleInput = e => {
        const { dispatch } = this.props;
        const { name, value } = e.target;
        e.persist();

        dispatch(changePreference(name, value));
    };

    addBuilderElem = elem => {
        if (this.editor.current) {
            this.editor.current.addNewElem(elem);
        }
    };

    render() {
        const { code } = this.state;
        const { preferences } = this.props;
        return (
            <BuilderWrapper>
                <Modal ref={this.settingsModal} title='Preferences'>
                    <ModalRow>
                        <FlexLeft>
                            <SettingType>Project Title</SettingType>
                            <SettingInput
                                ref={this.titleInput}
                                type='text'
                                name='projectTitle'
                                value={preferences.projectTitle}
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
                                value={preferences.projectDescription}
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
    <head>
    <link rel="stylesheet" href="FILENAME.css">
    <title>${preferences.projectTitle}</title>
    <meta name="description content="${preferences.projectDescription}"/>
    </head>
        <body>
            <div class="Container">
`}{' '}
                                        {code.items &&
                                            code.items.map(
                                                ({ uniqueID, type }, index) => {
                                                    return (
                                                        <pre
                                                            style={{
                                                                margin: 0,
                                                                padding: 0
                                                            }}
                                                        >
                                                            <code
                                                                key={uniqueID}
                                                            >
                                                                {
                                                                    typeData[
                                                                        type
                                                                    ].html
                                                                }
                                                            </code>
                                                        </pre>
                                                    );
                                                }
                                            )}
                                        {`
        </div>
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
                                        {code.items &&
                                            code.items.map(
                                                ({ uniqueID, type }) => {
                                                    return (
                                                        <pre>
                                                            <code
                                                                key={uniqueID}
                                                            >
                                                                {
                                                                    typeData[
                                                                        type
                                                                    ].css
                                                                }
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

const mapStateToProps = state => {
    return {
        preferences: state.preferences
    };
};

export default connect(mapStateToProps)(Builder);
