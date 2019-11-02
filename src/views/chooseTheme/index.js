import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChooseThemeLayout, ThemeWrapper, Theme } from './styles';
import { SmallHeading, Button } from '../../Styling/Styling';

const ThemeChooser = () => {
    const [chosenTheme, setChosenTheme] = useState(undefined);

    const handleTheme = themeName => {
        setChosenTheme(themeName);
    };

    return (
        <div>
            <ChooseThemeLayout>
                <SmallHeading fontColor="#8F8F8F">
                    Choose Your Template
                </SmallHeading>
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
                <Button>
                    <Link to={`/edit/${chosenTheme}`}>Continue</Link>
                </Button>
            </ChooseThemeLayout>
        </div>
    );
};

export default ThemeChooser;
