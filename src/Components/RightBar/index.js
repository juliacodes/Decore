import React from 'react';
import { Block, ScrollCont, Line } from './styles';

export default class RightBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'half'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const windowHeight =
            'innerHeight' in window
                ? window.innerHeight
                : document.documentElement.offsetHeight;
        const { body } = document;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const windowBottom = windowHeight + window.pageYOffset;

        if (window.pageYOffset >= 500 && windowBottom + 100 < docHeight) {
            this.setState({
                position: 'side'
            });
        } else if (windowBottom + 100 >= docHeight) {
            this.setState({
                position: 'full'
            });
        } else {
            this.setState({
                position: 'half'
            });
        }
    }

    render() {
        const { position } = this.state;
        return (
            <Block positionAnim={position}>
                <ScrollCont
                    style={
                        position === 'side' || position === 'full'
                            ? {
                                  transition: 'opacity  .3s',
                                  opacity: '0'
                              }
                            : { opacity: '1' }
                    }
                >
                    <Line />
                    <p>Scroll Down</p>
                </ScrollCont>
            </Block>
        );
    }
}
