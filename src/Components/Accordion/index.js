import React from 'react';
import { AccordionWrapper, AccordionContent, AccordionButton } from './styles';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            height: '0px'
        };

        this.content = React.createRef(null);

        this.toggleAccordion = this.toggleAccordion.bind(this);
    }

    toggleAccordion = () => {
        const { active } = this.state;
        this.setState({
            active: !active,
            height: active ? '0px' : `${this.content.current.scrollHeight}px`
        });
    };

    render() {
        const { height, active } = this.state;
        const { title, children } = this.props;
        return (
            <AccordionWrapper className={active ? 'active' : ''}>
                <AccordionButton type='button' onClick={this.toggleAccordion}>
                    <p>{title}</p>
                    <svg
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                    >
                        <path
                            fill='currentColor'
                            d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
                        />
                    </svg>
                </AccordionButton>
                <AccordionContent
                    style={{ maxHeight: `${height}` }}
                    ref={this.content}
                >
                    {children}
                </AccordionContent>
            </AccordionWrapper>
        );
    }
}
