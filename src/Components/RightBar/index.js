import React from 'react';
import { Block, ScrollCont, Line } from './styles';

export default class RightBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minimize: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.pageYOffset >= 500) {
            this.setState({
                minimize: true
            });
        } else {
            this.setState({
                minimize: false
            });
        }
    }

    render() {
        const { minimize } = this.state;
        return (
            <Block
                style={
                    minimize
                        ? {
                              transitionDuration: '.5s',
                              transform: 'translate(90%,0)'
                          }
                        : {}
                }
            >
                <ScrollCont
                    style={
                        minimize
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
