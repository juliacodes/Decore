import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, SmallHeading, Button } from '../../Styling/Styling';
import {
    ChooseTheme,
    ChooseThemeLayout,
    ThemeWrapper,
    Theme,
    ShortHero
} from './styles';

const ThemeChooser = () => {
    const [chosenTheme, setChosenTheme] = useState('second');

    // Set the selected theme when a user clicks one
    const handleTheme = themeName => {
        setChosenTheme(themeName);
    };

    return (
        <ChooseTheme>
            <ShortHero background="#5442F8">
                <SmallHeading fontColor="#FFFFFF" fontFamily={FONTS.secondary}>
                    Choose Your Template
                </SmallHeading>
            </ShortHero>
            <ChooseThemeLayout>
                <ThemeWrapper>
                    <Theme
                        onClick={() => handleTheme('first')}
                        className={chosenTheme === 'first' ? 'selected' : null}
                    />
                    <Theme
                        onClick={() => handleTheme('second')}
                        className={chosenTheme === 'second' ? 'selected' : null}
                    />
                    <Theme
                        onClick={() => handleTheme('third')}
                        className={chosenTheme === 'third' ? 'selected' : null}
                    />
                </ThemeWrapper>
                <Link to={`/edit/${chosenTheme}`}>
                    <Button
                        background={COLORS.lightBlue}
                        color={COLORS.darkBlue}
                        fontFamily={FONTS.primary}
                        hoverBackground={COLORS.darkBlue}
                        hoverColor={COLORS.lightBlue}
                    >
                        Continue
                    </Button>
                </Link>
                <p>
                    or start from a <Link to="/colors">blank template</Link>
                </p>
            </ChooseThemeLayout>
        </ChooseTheme>
    );
};

export default ThemeChooser;
