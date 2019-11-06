import { keyframes } from 'styled-components/macro';

const AnimateIn = keyframes`
from{
    opacity: 0;
    transform: scale(0) rotate(0deg);
}
to{
    opacity: 1;
    transform: scale(1.7) rotate(200deg);
}
`;

export default AnimateIn;
