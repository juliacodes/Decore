import React from 'react';
import { Triangle, Circle, Dot } from './Shapes';
import { COLORS } from '../../Styling';

function Shapes() {
    return (
        <>
            <Circle
                topPosition="25%"
                leftPosition="10%"
                colorStroke={COLORS.palePink}
            />
            <Triangle colorStroke={COLORS.yellow} />
            <Triangle
                topPosition="85%"
                leftPosition="25%"
                colorStroke={COLORS.palePink}
            />
            <Triangle
                topPosition="95%"
                leftPosition="5%"
                colorStroke={COLORS.paleBlue}
            />
            <Dot colorStroke={COLORS.paleBlue} />
            <Circle colorStroke={COLORS.yellow} />
        </>
    );
}

export default Shapes;
