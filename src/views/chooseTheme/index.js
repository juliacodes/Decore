import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    COLORS,
    FONTS,
    SmallHeading,
    Heading,
    Button,
    Paragraph
} from '../../Styling/Styling';
import {
    ChooseTheme,
    ChooseThemeLayout,
    ThemeWrapper,
    Theme,
    CardHeading,
    ShortHero
} from './styles';

const ThemeChooser = () => {
    const [chosenTheme, setChosenTheme] = useState('landing');

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
                        onClick={() => handleTheme('blog')}
                        className={chosenTheme === 'blog' ? 'selected' : null}
                    >
                        <CardHeading>Blog Template</CardHeading>
                        <Paragraph className="features">
                            <span>Components: </span> <br /> navbar <br />
                            heading <br />
                            article <br />
                            footer
                        </Paragraph>
                    </Theme>
                    <Theme
                        onClick={() => handleTheme('landing')}
                        className={
                            chosenTheme === 'landing' ? 'selected' : null
                        }
                    >
                        {' '}
                        <CardHeading>Landing Page</CardHeading>
                        <Paragraph className="features">
                            <span>Components: </span> <br /> navbar <br />
                            heading <br />
                            flex divs <br />
                            footer
                        </Paragraph>
                    </Theme>
                    <Theme
                        onClick={() => handleTheme('landingAlternative')}
                        className={
                            chosenTheme === 'landingAlternative'
                                ? 'selected'
                                : null
                        }
                    >
                        <CardHeading>Landing Page Alt</CardHeading>
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
