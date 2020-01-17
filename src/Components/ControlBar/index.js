import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeAllColors } from '../../actions/colors';
import Accordion from '../Accordion';
import { premadeList, premadeSchemes } from '../../store/premadeSchemes';
import {
    ControlSideBar,
    SettingsBar,
    TopBar,
    Elements,
    Element,
    Dropdown,
    ColorScheme,
    Color,
    Padded,
    Settings,
    Export
} from './styles';

class ControlBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schemes: premadeSchemes,
            schemeList: [...premadeList],
            currentSchemeName: ''
        }
    }

    handleChangeScheme = theme => {
        const { dispatch } = this.props;
        const { schemes } = this.state;

        dispatch(changeAllColors(schemes[theme.value]));
        this.setState(prevState => ({
            ...prevState,
            currentSchemeName: theme.value
        }))
    };

    handleCheckColors = () => {
        const { colors } = this.props;

        // Check for object equality
        for (const key of Object.keys(premadeSchemes)) {

            // If the users colors are exactly like an object in the premadeSchemes,
            // return true and set the state accordingly
            if (JSON.stringify(colors) === JSON.stringify(premadeSchemes[key])) {
                console.log('is in premadeSchemes');
                this.setState({currentSchemeName: key});
                return true;
            }
        }
        // If the users colors are not exactly like any of the objects in the premadeSchemes file,
        // return false and set the state accordingly
        console.log('not premadeSchemes');
        this.setState({
            schemeList: [
                { value: 'custom', label: 'Custom '},
                ...this.state.schemeList
            ],
            currentSchemeName: 'custom',
            schemes: {
                ...this.state.schemes,
                custom: colors
            }
        });
        return false;
    }

    componentDidMount() {
        this.handleCheckColors();
    }

    render() {
        const { handleModal, handleCodeModal, addBuilderElem, colors } = this.props;
        const { schemeList, currentSchemeName } = this.state;
        return (
            <ControlSideBar>
                <TopBar>
                    <Padded padding='25px'>
                        <Dropdown>
                            <Select
                                inputId='theme'
                                placeholder='Choose Scheme'
                                classNamePrefix='theme'
                                options={this.state.schemeList}
                                onChange={this.handleChangeScheme}
                                aria-label="Choose Scheme"
                                // value={this.state.schemeList[this.state.currentSchemeName]}
                                value={schemeList.filter(({value}) => value === currentSchemeName)}
                            />
                        </Dropdown>
                        <ColorScheme>
                            {Object.keys(colors).map((color, index) => (
                                <Color color={colors[color]} key={index} />
                            ))}
                        </ColorScheme>
                    </Padded>
                </TopBar>
                <Elements>
                    <Accordion title='Semantic Structure'>
                        <Element onClick={() => addBuilderElem('header')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Header</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('nav')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Nav</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('article')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Article</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('section')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Section</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('table')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Table</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('footer')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Footer</p>
                        </Element>
                    </Accordion>
                    <Accordion title='Layouts'>
                        <Element onClick={() => addBuilderElem('div')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Div</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('splitDiv')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Split-Div</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('triDiv')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Tri-Split-Div</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('image')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Image</p>
                        </Element>
                    </Accordion>
                    <Accordion title='Sections'>
                        <Element onClick={() => addBuilderElem('cta')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Call to Action</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('imageText')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Image &amp; Text</p>
                        </Element>
                        <Element onClick={() => addBuilderElem('navContent')}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Nav with Content</p>
                        </Element>
                        <Element
                            onClick={() => addBuilderElem('footerContent')}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <path d='M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' />
                                <path d='M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12' />
                            </svg>
                            <p>Footer with Content</p>
                        </Element>
                    </Accordion>
                </Elements>
                <SettingsBar>
                    <Settings onClick={handleModal}>
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M22.5938 14.0625L21.0938 13.1719C21.0938 12.8438 21.1406 12.3281 21.1406 12C21.1406 11.7188 21.0938 11.2031 21.0938 10.875L22.5938 9.98438C23.0625 9.75 23.25 9.1875 23.1094 8.71875C22.5938 6.9375 21.6562 5.34375 20.4375 4.03125C20.0625 3.65625 19.5 3.5625 19.0312 3.84375L17.5312 4.73438C17.0156 4.3125 16.125 3.79688 15.5156 3.5625V1.82812C15.5156 1.26562 15.1875 0.84375 14.6719 0.703125C12.8906 0.28125 11.0625 0.28125 9.28125 0.703125C8.76562 0.84375 8.4375 1.26562 8.4375 1.82812V3.5625C7.82812 3.79688 6.9375 4.3125 6.42188 4.73438L4.92188 3.84375C4.45312 3.5625 3.89062 3.65625 3.51562 4.03125C2.29688 5.34375 1.35938 6.9375 0.84375 8.71875C0.703125 9.1875 0.890625 9.75 1.35938 9.98438L2.85938 10.875C2.85938 11.2031 2.8125 11.7188 2.8125 12C2.8125 12.3281 2.85938 12.8438 2.85938 13.1719L1.35938 14.0625C0.890625 14.2969 0.703125 14.8594 0.84375 15.3281C1.35938 17.1094 2.29688 18.7031 3.51562 20.0156C3.89062 20.3906 4.45312 20.4844 4.92188 20.2031L6.42188 19.3125C6.9375 19.7344 7.82812 20.25 8.4375 20.4844V22.2188C8.4375 22.7812 8.76562 23.2031 9.28125 23.3438C11.0625 23.7656 12.8906 23.7656 14.6719 23.3438C15.1875 23.2031 15.5156 22.7812 15.5156 22.2188V20.4844C16.125 20.25 17.0156 19.7344 17.5312 19.3125L19.0312 20.2031C19.5 20.4844 20.0625 20.3906 20.4375 20.0156C21.6562 18.7031 22.5938 17.1094 23.1094 15.3281C23.25 14.8594 23.0625 14.2969 22.5938 14.0625ZM19.5469 18.75L17.3438 17.4844C16.0781 18.6094 15.6562 18.8438 14.0156 19.4531V21.9375C13.4531 22.0781 12.5625 22.1719 12 22.1719C11.3906 22.1719 10.5 22.0781 9.9375 21.9375V19.4531C8.34375 18.8906 7.875 18.6094 6.60938 17.4844L4.40625 18.75C3.51562 17.7188 2.8125 16.5 2.34375 15.1875L4.54688 13.9688C4.21875 12.2812 4.21875 11.7656 4.54688 10.0781L2.34375 8.85938C2.8125 7.54688 3.51562 6.32812 4.40625 5.29688L6.60938 6.5625C7.875 5.4375 8.34375 5.15625 9.9375 4.59375V2.10938C10.5 1.96875 11.3906 1.875 12 1.875C12.5625 1.875 13.4531 1.96875 14.0156 2.10938V4.59375C15.6094 5.15625 16.0781 5.4375 17.3438 6.5625L19.5469 5.29688C20.4375 6.32812 21.1406 7.54688 21.6094 8.85938L19.4062 10.0781C19.7344 11.7656 19.7344 12.2812 19.4062 13.9688L21.6094 15.1875C21.1406 16.5 20.4375 17.7188 19.5469 18.75ZM12 7.5C9.51562 7.5 7.5 9.5625 7.5 12C7.5 14.4844 9.51562 16.5 12 16.5C14.4375 16.5 16.5 14.4844 16.5 12C16.5 9.5625 14.4375 7.5 12 7.5ZM12 15C10.3125 15 9 13.6875 9 12C9 10.3594 10.3125 9 12 9C13.6406 9 15 10.3594 15 12C15 13.6875 13.6406 15 12 15Z'
                                fill='#8F8F8F'
                            />
                        </svg>

                        <p>Settings</p>
                    </Settings>
                    <Export onClick={handleCodeModal}>Export</Export>
                </SettingsBar>
            </ControlSideBar>
        );
    }
}

const mapStateToProps = state => {
    return {
        colors: state.colors
    };
};

export default connect(mapStateToProps)(ControlBar);
