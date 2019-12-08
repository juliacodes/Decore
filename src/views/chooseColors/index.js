import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import AppContext from '../../AppContext';
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

const ChooseColors = () => {
    const { colors, setColors } = useContext(AppContext);
    const node = useRef(); // Reference hook for handleClick function

    const [pickerStatus, setPickerStatus] = useState(false);
    const [pickerSelected, setPickerSelected] = useState('colorOne');
    const [pickerLocation, setPickerLocation] = useState({
        x: undefined,
        y: undefined
    });

    const handlePicker = (color, e) => {
        setPickerSelected(color);
        setPickerStatus(true);
        setPickerLocation({
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        });
    };

    const handleChangeComplete = color => {
        setColors(prevState => ({ ...prevState, [pickerSelected]: color.hex }));
    };

    // If click event is not within a element with ref={node},
    // set the status of the picker to false (hidden)
    const handleClick = e => {
        if (!node.current.contains(e.target)) {
            setPickerStatus(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick); // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <ChooseColorsWrapper>
            <SmallHeading>Template Colors</SmallHeading>
            <TemplateColors ref={node}>
                {Object.keys(colors).map((color, index) => (
                    <Color
                        // Using index for this case is fine since there is only a set number of colors
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        background={colors[color]}
                        onClick={e => handlePicker(color, e)}
                    />
                ))}
                <ColorPicker
                    display={pickerStatus}
                    top={pickerLocation.y}
                    left={pickerLocation.x}
                >
                    <ChromePicker
                        color={colors[pickerSelected]}
                        onChange={handleChangeComplete}
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
                <ColorButton backgroundColor={colors.colorFive} color="#FFFFFF">
                    Alt
                </ColorButton>
            </ButtonGroup>

            <SmallHeading>Select A Font</SmallHeading>
            <Font />

            <SmallHeading>Links</SmallHeading>
            <Paragraph className="apply-font">
                Lorem ipsum dolor sit amet,{' '}
                <TemplateLink color={colors.colorOne}>consectetur</TemplateLink>{' '}
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
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
};

export default ChooseColors;
