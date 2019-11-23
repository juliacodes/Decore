import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

export default class Title extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '<h1>Click here to edit text.</h1>'
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
                    config={{
                        toolbar: [
                            'heading',
                            '|',
                            'bold',
                            '|',
                            'italic',
                            '|',
                            'undo',
                            'redo'
                        ]
                    }}
                />
            </div>
        );
    }
}
