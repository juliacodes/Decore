import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default class Text extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '<p>Click here to edit text.</p>'
        };
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(editorData) {
        this.setState({
            data: editorData
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <CKEditor
                    editor={InlineEditor}
                    data={data}
                    // Updated the state on blur since there is no need to update the state every character
                    onBlur={(event, editor) => {
                        const editorData = editor.getData();
                        this.onTextChange(editorData);
                    }}
                />
            </div>
        );
    }
}
