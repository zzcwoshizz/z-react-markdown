import React from 'react';

export default class Edite extends React.Component {
    render() {
        return <textarea
            className='editor-edite'
            onKeyDown={e => {
                const self = e.target;
                if (e.keyCode == 9) {
                    // 监听tab键
                    e.preventDefault();
                    if (!e.shiftKey) {
                        let indent = '    ';
                        let start = self.selectionStart;
                        let end = self.selectionEnd;
                        let selected = window.getSelection().toString();
                        selected = indent + selected.replace(/\n/g, '\n' + indent);
                        self.value = self.value.substring(0, start) + selected + self.value.substring(end);
                        self.setSelectionRange(start + indent.length, start + selected.length);
                    }
                }
            }}
            value={this.props.value}
            onChange={this.props.onChange}
        ></textarea>;
    }
}
