import React from 'react';
import marked from 'marked';

import Toolbar from './Toolbar';
import Edite from './Edite';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(text) {
        this.setState({ text });
    }

    render() {
        const {
            width,
            height,
        } = this.props;
        return <div
            className='editor-container'
        >
            <Toolbar />
            <div className='editor-content'
                style={{ width, height }}
            >
                <Edite
                    lines={this.state.lines}
                    onChange={this.onChange}
                    addNewLine={this.addNewLine}
                />
                <div
                    ref='aaa'
                    className='editor-preview'
                    dangerouslySetInnerHTML={{
                        __html: marked(this.state.text.replace(/&nbsp;/g, ' '))
                    }}
                ></div>
            </div>
        </div>;
    }
}
