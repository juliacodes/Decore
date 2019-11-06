import { keyframes } from 'styled-components/macro';

const AnimateIn = keyframes`
0%{
    opacity: 0;
    transform: translate(0, 10px) scale(0) rotate(0deg);
}

70%{
    opacity: 1;
    transform: translate(0, 0) scale(1.9) rotate(180deg);
}

100%{
    opacity: 1;
    transform: translate(0, 0) scale(1.7) rotate(200deg);
}
`;

export default AnimateIn;
