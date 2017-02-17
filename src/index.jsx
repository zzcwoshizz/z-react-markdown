import React from 'react';
const markdown = require('markdown').markdown;

import H1 from './icons/H1';
import H2 from './icons/H2';
import H3 from './icons/H3';
import H4 from './icons/H4';
import H5 from './icons/H5';
import H6 from './icons/H6';
import Table from './icons/Table';
import Code from './icons/Code';
import Empty from './icons/Empty';
import B from './icons/B';
import Link from './icons/Link';
import Delete from './icons/Delete';
import Img from './icons/Img';
import Wlist from './icons/Wlist';
import Incline from './icons/Incline';
import Block from './icons/Block';
import Ylist from './icons/Ylist';
import A1 from './icons/A1';
import A from './icons/A';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        const {
            width,
            height,
        } = this.props;
        return <div
            style={{ width, height }}
            className='editor-container'
        >
            <div className='toolbar'>
                <li><B></B></li>
                <li><Delete></Delete></li>
                <li><Incline></Incline></li>
                <li><Block></Block></li>
                <li><A></A></li>
                <li><A1></A1></li>
                <span></span>
                <li><H1></H1></li>
                <li><H2></H2></li>
                <li><H3></H3></li>
                <li><H4></H4></li>
                <li><H5></H5></li>
                <li><H6></H6></li>
                <span></span>
                <li><Wlist></Wlist></li>
                <li><Ylist></Ylist></li>
                <span></span>
                <li><Link></Link></li>
                <li><Table></Table></li>
                <li><Code></Code></li>
                <li><Img></Img></li>
                <span></span>
                <li title='清空'><Empty></Empty></li>
            </div>
            <div className='editor-content'>
                <textarea
                    className='editor-edite'
                    onKeyDown={e => {
                        const self = e.target;
                        if (e.keyCode == 9) {
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
                    value={this.props.value || this.state.text}
                    onChange={this.props.onChange || this.onChange}
                ></textarea>
                <div
                    className='editor-preview'
                    dangerouslySetInnerHTML={{ __html: markdown.toHTML(this.state.text) }}
                ></div>
            </div>
        </div>;
    }
}
