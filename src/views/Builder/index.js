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
    SettingTextArea,
    Export,
} from './styles';
import { FlexLeft, FlexRight } from '../../Components/FlexSplit/FlexSplit';
import { Button, Paragraph } from '../../Styling';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Builder extends React.Component {
    constructor(props) {
        super(props);
        const items = JSON.parse(localStorage.getItem('items')); // gets item listing from local storage
        this.state = {
            code: { items },
            value: 'hi',
            copied: false,
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

    handleSettingsChange = (event) => {
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
        this.setState({ value: { items } });
    };

    handleCodeChange = () => {
        const { code } = { ...this.state };
        const currentState = code;
        this.setState({ settings: currentState });
    };

    handleInput = (e) => {
        const { dispatch } = this.props;
        const { name, value } = e.target;
        e.persist();

        dispatch(changePreference(name, value));
    };

    addBuilderElem = (elem) => {
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
                                <SyntaxHighlighter
                                    language='html'
                                    style={tomorrow}
                                >
                                    {`
<main>`}{' '}
                                </SyntaxHighlighter>
                                {code.items &&
                                    code.items.map(
                                        ({ uniqueID, type }, index) => {
                                            return (
                                                <SyntaxHighlighter
                                                    language='html'
                                                    style={tomorrow}
                                                >
                                                    {typeData[type].html}
                                                </SyntaxHighlighter>
                                            );
                                        }
                                    )}
                                <SyntaxHighlighter
                                    language='html'
                                    style={tomorrow}
                                >
                                    {`
</main>`}
                                </SyntaxHighlighter>
                            </CodeEditor>
                            {/* <CopyToClipboard
                                text={this.state.value}
                                onCopy={() => this.setState({ copied: true })}
                            >
                                {this.state.copied ? (
                                    <span style={{ color: 'red' }}>
                                        <Export>Done</Export>
                                    </span>
                                ) : (
                                    <Export>Copy</Export>
                                )}
                            </CopyToClipboard> */}
                        </FlexLeft>
                        <FlexRight>
                            <Paragraph>CSS</Paragraph>
                            <CodeEditor>
                                <SyntaxHighlighter
                                    language='css'
                                    style={tomorrow}
                                >
                                    {`
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #f5f5f5;
}

.div {
    background-color: white;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
  
main {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: column;
}
  
main > * {
    margin: 0 auto 20px auto;
    height: auto;
    width: 100%;
}`}{' '}
                                </SyntaxHighlighter>
                                {code.items &&
                                    code.items.map(({ uniqueID, type }) => {
                                        return (
                                            <SyntaxHighlighter
                                                language='css'
                                                style={tomorrow}
                                            >
                                                {typeData[type].css}
                                            </SyntaxHighlighter>
                                        );
                                    })}
                            </CodeEditor>
                            {/* <Export>click to copy</Export> */}
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

const mapStateToProps = (state) => {
    return {
        preferences: state.preferences,
    };
};

export default connect(mapStateToProps)(Builder);
