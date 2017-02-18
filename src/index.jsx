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
            className='editor-container'
        >
            <Toolbar/>
            <div className='editor-content'
                style={{ width, height }}
            >
                <Edite
                    value={this.props.value || this.state.text}
                    onChange={this.props.onChange || this.onChange}
                />
                <div
                    ref='aaa'
                    className='editor-preview'
                    dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
                ></div>
            </div>
        </div>;
    }
}
