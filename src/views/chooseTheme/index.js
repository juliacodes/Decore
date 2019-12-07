import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    COLORS,
    FONTS,
    SmallHeading,
    Button,
    Paragraph
} from '../../Styling/Styling';
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
        localStorage.setItem('theme', themeName);
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
                    >
                        <Paragraph>Blog Template</Paragraph>
                        <Paragraph className="features">
                            <span>Components: </span> <br /> navbar <br />
                            heading <br />
                            article <br />
                            footer
                        </Paragraph>
                    </Theme>
                    <Theme
                        onClick={() => handleTheme('second')}
                        className={chosenTheme === 'second' ? 'selected' : null}
                    >
                        {' '}
                        <Paragraph>Landing Page</Paragraph>
                        <Paragraph className="features">
                            <span>Components: </span> <br /> navbar <br />
                            heading <br />
                            flex divs <br />
                            footer
                        </Paragraph>
                    </Theme>
                    <Theme
                        onClick={() => handleTheme('third')}
                        className={chosenTheme === 'third' ? 'selected' : null}
                    >
                        <Paragraph>Landing Page Alt</Paragraph>
                        <Paragraph className="features">
                            <span>Components: </span> <br /> navbar <br />
                            Image Header <br />
                            Table Grid <br />
                            footer
                        </Paragraph>
                    </Theme>
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
                <alt>
                    or start from a{' '}
                    <Link to="/colors">
                        <span>blank template</span>
                    </Link>
                </alt>
            </ChooseThemeLayout>
        </ChooseTheme>
    );
};

export default ThemeChooser;
