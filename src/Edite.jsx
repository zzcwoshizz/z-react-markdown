import React from 'react';
import 'codemirror/lib/codemirror.css';
import codemirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/selection/active-line';

export default class Edite extends React.Component {
    constructor(props) {
        super(props);
        this.currentLine = 0;
    }

    render() {
        return <textarea ref='text'></textarea>;
    }

    componentDidMount() {
        const editor = codemirror.fromTextArea(this.refs.text, {
            mode: 'markdown',
            gotoLine: true,
            autoHeight: true,
            tabSize: 4,
            indentUnit: 4,
            lineNumbers: true,
            firstLineNumber: 0,
            lineWrapping: true,
            autoCloseBrackets: true,
            showTrailingSpace: true,
            matchBrackets: true,
            indentWithTabs: true,
            matchWordHighlight: true,
            styleSelectedText: true,
            styleActiveLine: true
        });
        editor.on('change', (instance, changeObj) => {
            this.props.onChange(instance.getValue('\n\r'));
        });
    }
}
