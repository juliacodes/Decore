import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import { changeColor } from '../../actions/colors';
import Font from '../../Components/Font';
import { COLORS, SmallHeading, Button, FONTS } from '../../Styling/Styling';

import {
    ChooseColorsWrapper,
    TemplateColors,
    Color,
    TemplateLink,
    Paragraph,
    ColorPicker,
    ButtonGroup,
    ColorButton
} from './styles';

class ChooseColors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pickerStatus: false,
            pickerSelected: 'colorOne',
            pickerLocation: {
                x: undefined,
                y: undefined
            }
        };

        this.node = React.createRef();
    }

    handlePicker = (color, e) => {
        // console.log(color, e.target.offsetLeft);
        const { offsetLeft, offsetTop } = e.target;
        this.setState(prevState => ({
            ...prevState,
            pickerSelected: color,
            pickerStatus: true,
            pickerLocation: {
                x: offsetLeft,
                y: offsetTop
            }
        }));
    };

    handleChangeComplete = color => {
        const { pickerSelected } = this.state;
        const { dispatch } = this.props;
        // this.setState(prevState => ({}));
        // setColors(prevState => ({ ...prevState, [pickerSelected]: color.hex }));
        dispatch(changeColor(pickerSelected, color.hex));
    };

    handleClick = e => {
        if (this.node.current && !this.node.current.contains(e.target)) {
            this.setState(prevState => ({
                ...prevState,
                pickerStatus: false
            }));
        }
    };

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClick); // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', this.handleClick);
        };
    };

    render() {
        const { pickerStatus, pickerLocation, pickerSelected } = this.state;
        const { colors } = this.props;
        return (
            <ChooseColorsWrapper>
                <SmallHeading>Template Colors</SmallHeading>
                <TemplateColors ref={this.node}>
                    {Object.keys(colors).map((color, index) => (
                        <Color
                            // Using index for this case is fine since there is only a set number of colors
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            background={colors[color]}
                            onClick={e => this.handlePicker(color, e)}
                        />
                    ))}
                    <ColorPicker
                        style={
                            pickerStatus
                                ? { display: 'block' }
                                : { display: 'none' }
                        }
                        top={pickerLocation.y}
                        left={pickerLocation.x}
                    >
                        <ChromePicker
                            color={colors[pickerSelected]}
                            onChange={this.handleChangeComplete}
                            disableAlpha
                        />
                    </ColorPicker>
                </TemplateColors>
                <SmallHeading>Example Components</SmallHeading>
                <ButtonGroup>
                    <ColorButton
                        backgroundColor={colors.colorOne}
                        border={colors.colorOne}
                        color="#FFFFFF"
                    >
                        Primary
                    </ColorButton>
                    <ColorButton
                        backgroundColor={colors.colorThree}
                        color="#FFFFFF"
                    >
                        Secondary
                    </ColorButton>
                    <ColorButton
                        backgroundColor={colors.colorFive}
                        color="#FFFFFF"
                    >
                        Alt
                    </ColorButton>
                </ButtonGroup>

                {/*<SmallHeading>Select A Font</SmallHeading>
                <Font />
                */}

                <SmallHeading>Links</SmallHeading>
                <Paragraph className="apply-font">
                    Lorem ipsum dolor sit amet,{' '}
                    <TemplateLink color={colors.colorOne}>
                        consectetur
                    </TemplateLink>{' '}
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Paragraph>
                <Link to="/edit/custom">
                    <Button
                        background={COLORS.lightBlue}
                        color={COLORS.darkBlue}
                        fontFamily={FONTS.primary}
                        hoverBackground={COLORS.darkBlue}
                        hoverColor={COLORS.lightBlue}
                        margin="100px auto 50px auto"
                    >
                        Continue
                    </Button>
                </Link>
            </ChooseColorsWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        colors: state.colors
    };
};

export default connect(mapStateToProps)(ChooseColors);
