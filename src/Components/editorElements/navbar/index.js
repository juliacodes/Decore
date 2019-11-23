import React from 'react';
import CKEditor from 'ckeditor4-react';
import { Navigation } from './styles';

export default class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <Navigation>
                <div />
                <nav>
                    <li>
                        <a href="#">
                            <CKEditor type="inline" />
                        </a>
                    </li>
                    <li>
                        <a href="#">test</a>
                    </li>
                    <li>
                        <a href="#">test</a>
                    </li>
                </nav>
            </Navigation>
        );
    }
}
