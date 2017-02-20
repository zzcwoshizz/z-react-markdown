import React from 'react';

export default class Edite extends React.Component {
    constructor(props) {
        super(props);
        this.currentLine = 0;
    }

    render() {
        return <textarea ref='editor'></textarea>;
    }

    componentDidMount() {
        this.props.buildEditor(this.refs.editor);
    }
}
