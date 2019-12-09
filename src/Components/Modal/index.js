import React from 'react';
import {
    ModalBackground,
    ModalWrapper,
    CodeModalWrapper,
    ModalHeading,
    ModalBody
} from './styles';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.modal = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    toggleModal = status => {
        this.setState({ active: status });
    };

    handleClickOutside = e => {
        if (this.modal.current && !this.modal.current.contains(e.target)) {
            this.setState({ active: false });
        }
    };

    render() {
        const { active } = this.state;
        const { title, children, modalType } = this.props;

        return (
            <ModalBackground className={active && 'active'}>
                {modalType === 'codeModal' ? (
                    <CodeModalWrapper ref={this.modal}>
                        <ModalHeading>
                            <p>{title}</p>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                onClick={() => this.toggleModal(false)}
                            >
                                <path
                                    d='M12.0938 9L16.7812 4.3125C17.3906 3.75 17.3906 2.8125 16.7812 2.25L15.75 1.21875C15.1875 0.609375 14.25 0.609375 13.6875 1.21875L9 5.90625L4.26562 1.21875C3.70312 0.609375 2.76562 0.609375 2.20312 1.21875L1.17188 2.25C0.5625 2.8125 0.5625 3.75 1.17188 4.3125L5.85938 9L1.17188 13.7344C0.5625 14.2969 0.5625 15.2344 1.17188 15.7969L2.20312 16.8281C2.76562 17.4375 3.70312 17.4375 4.26562 16.8281L9 12.1406L13.6875 16.8281C14.25 17.4375 15.1875 17.4375 15.75 16.8281L16.7812 15.7969C17.3906 15.2344 17.3906 14.2969 16.7812 13.7344L12.0938 9Z'
                                    fill='#8F8F8F'
                                />
                            </svg>
                        </ModalHeading>
                        <ModalBody>{children}</ModalBody>
                    </CodeModalWrapper>
                ) : (
                    <ModalWrapper ref={this.modal}>
                        <ModalHeading>
                            <p>{title}</p>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                onClick={() => this.toggleModal(false)}
                            >
                                <path
                                    d='M12.0938 9L16.7812 4.3125C17.3906 3.75 17.3906 2.8125 16.7812 2.25L15.75 1.21875C15.1875 0.609375 14.25 0.609375 13.6875 1.21875L9 5.90625L4.26562 1.21875C3.70312 0.609375 2.76562 0.609375 2.20312 1.21875L1.17188 2.25C0.5625 2.8125 0.5625 3.75 1.17188 4.3125L5.85938 9L1.17188 13.7344C0.5625 14.2969 0.5625 15.2344 1.17188 15.7969L2.20312 16.8281C2.76562 17.4375 3.70312 17.4375 4.26562 16.8281L9 12.1406L13.6875 16.8281C14.25 17.4375 15.1875 17.4375 15.75 16.8281L16.7812 15.7969C17.3906 15.2344 17.3906 14.2969 16.7812 13.7344L12.0938 9Z'
                                    fill='#8F8F8F'
                                />
                            </svg>
                        </ModalHeading>
                        <ModalBody>{children}</ModalBody>
                    </ModalWrapper>
                )}
            </ModalBackground>
        );
    }
}
