import React from 'react';
import marked from 'marked';
import 'codemirror/lib/codemirror.css';
import codemirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/selection/active-line';

import Toolbar from './Toolbar';
import Edite from './Edite';
import LinkDialog from './LinkDialog';
import ImgDialog from './ImgDialog';
import TableDialog from './TableDialog';
import toolBarCallback from './toolBarCallback';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            showLinkDialog: false,
            showImgDialog: false,
            showTableDialog: false
        };
        this.editor = null;
        this.onChange = this.onChange.bind(this);
        this.buildEditor = this.buildEditor.bind(this);
        this.exeCommand = this.exeCommand.bind(this);
    }

    onChange(text) {
        this.setState({ text });
        if (this.props.onChange) {
            this.props.onChange({
                mdStr: text,
                html: marked(text.replace(/&nbsp;/g, ' '))
            });
        }
    }

    render() {
        const {
            width,
            height,
        } = this.props;
        return <div
            className='editor-container'
        >
            {this.state.showLinkDialog ? <LinkDialog
                submit={({text, link}) => {
                    let str = `[${text}](${link} "${text}")`;
                    this.editor.replaceSelection(str);
                    this.editor.focus();
                }}
                finally={() => {
                    this.setState({
                        showLinkDialog: false
                    });
                }}
            /> : null}
            {this.state.showImgDialog ? <ImgDialog
                submit={({imgSrc, imgDesc, imgLink}) => {
                    if (!imgLink) {
                        let str = `![${imgDesc}](${imgSrc} "${imgDesc}")`;
                        this.editor.replaceSelection(str);
                    } else {
                        let str = `[![${imgDesc}](${imgSrc})](${imgLink} "${imgDesc}")`;
                        this.editor.replaceSelection(str);
                    }
                    this.editor.focus();
                }}
                finally={() => {
                    this.setState({
                        showImgDialog: false
                    });
                }}
            /> : null}
            {this.state.showTableDialog ? <TableDialog
                submit={({row, col, alignType}) => {
                    let str = [];
                    let str1 = '';
                    let str2 = '';
                    for (let i = 0; i < row; i++) {
                        for (let j = 0; j <= col; j++) {
                            str1 += '| ';
                        }
                        str.push(str1.slice(0, -1));
                        str1 = '';
                    }
                    if (alignType == 0) {
                        for (let j = 0; j < col; j++) {
                            str2 += '|-';
                        }
                        str2 += '|';
                    } else if (alignType == 1) {
                        for (let j = 0; j < col; j++) {
                            str2 += '|:-';
                        }
                        str2 += '|';
                    } else if (alignType == 2) {
                        for (let j = 0; j < col; j++) {
                            str2 += '|:-:';
                        }
                        str2 += '|';
                    } else {
                        for (let j = 0; j < col; j++) {
                            str2 += '|-:';
                        }
                        str2 += '|';
                    }
                    str.splice(0, 1, str[0], str2);
                    this.editor.replaceSelection(str.join('\n') + '\n\r');
                    this.editor.focus();
                }}
                finally={() => {
                    this.setState({
                        showTableDialog: false
                    });
                }}
            /> : null}
            <Toolbar exeCommand={this.exeCommand}/>
            <div className='editor-content'
                style={{ width, height }}
            >
                <Edite
                    onChange={this.onChange}
                    buildEditor={this.buildEditor}
                />
                <div
                    className='editor-preview'
                    dangerouslySetInnerHTML={{
                        __html: marked(this.state.text.replace(/&nbsp;/g, ' '))
                    }}
                ></div>
            </div>
        </div>;
    }

    exeCommand(type) {
        return () => {
            if (type == 'link') {
                this.setState({
                    showLinkDialog: true
                });
            } else if (type == 'img') {
                this.setState({
                    showImgDialog: true
                });
            } else if (type == 'table') {
                this.setState({
                    showTableDialog: true
                });
            } else {
                toolBarCallback.call(this, type);
            }
            this.editor.focus();
        };
    }

    buildEditor(ele) {
        this.editor = codemirror.fromTextArea(ele, {
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
        this.editor.on('change', (instance, changeObj) => {
            this.onChange(instance.getValue());
        });
    }
}
