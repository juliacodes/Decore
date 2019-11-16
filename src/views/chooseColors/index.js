import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import {
    Heading,
    ChooseColorsWrapper,
    TemplateColors,
    Color,
    TemplateLink,
    Paragraph,
    ColorPicker,
    ButtonGroup,
    Button
} from './styles';

const ChooseColors = () => {
    const [colors, setColors] = useState({
        colorOne: '#4ECDC4',
        colorTwo: '#A7EEE9',
        colorThree: '#FF6B6B',
        colorFour: '#FFAAAA',
        colorFive: '#FFEB8C',
        colorSix: '#FFF4C1',
        colorSeven: '#D4D4D4',
        colorEight: '#EFF3EF'
    });

    const [pickerStatus, setPickerStatus] = useState(false);
    const [pickerSelected, setPickerSelected] = useState('colorOne');

    const handlePicker = color => {
        setPickerSelected(color);
        setPickerStatus(true);
    };

    const handleChangeComplete = color => {
        setColors(prevState => ({ ...prevState, [pickerSelected]: color.hex }));
    };

    return (
        <ChooseColorsWrapper>
            <Heading>Template Colors</Heading>
            <ColorPicker display={pickerStatus}>
                <ChromePicker
                    color={colors[pickerSelected]}
                    onChange={handleChangeComplete}
                    disableAlpha
                />
            </ColorPicker>
            <TemplateColors>
                {Object.keys(colors).map((color, index) => (
                    <Color
                        // Using index for this case is fine since there is only a set number of colors
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        background={colors[color]}
                        onClick={() => handlePicker(color)}
                    />
                ))}
            </TemplateColors>
            <Heading>Example Components</Heading>
            <ButtonGroup>
                <Button
                    backgroundColor={colors.colorOne}
                    border={colors.colorOne}
                    color="#FFFFFF"
                >
                    Primary
                </Button>
                <Button border={colors.colorOne} color={colors.colorOne}>
                    Secondary
                </Button>
                <Button border={colors.colorThree} color={colors.colorThree}>
                    Alt
                </Button>
            </ButtonGroup>
            <Heading>Links</Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet,{' '}
                <TemplateLink color={colors.colorOne}>consectetur</TemplateLink>{' '}
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </Paragraph>
        </ChooseColorsWrapper>
    );
};

export default ChooseColors;
