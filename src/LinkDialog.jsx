import React from 'react';

export default class LinkDialog extends React.Component {
    render() {
        return <div className='dialog' style={{ height: 240 }}>
            <div className='dialog-title'>添加链接</div>
            <div className='dialog-content'>
                <div className='dialog-field'>
                    <span>链接地址</span>
                    <input ref='link' defaultValue='http://' type='text' />
                </div>
                <div className='dialog-field'>
                    <span>链接标题</span>
                    <input ref='text' type='text' />
                </div>
            </div>
            <div className='dialog-operation'>
                <button onClick={e => {
                    this.props.submit({
                        text: this.refs.text.value,
                        link: this.refs.link.value
                    });
                    this.props.finally();
                }}>确定</button>
                <button onClick={() => {
                    (this.props.cancel || function () { })();
                    this.props.finally();
                }}>取消</button>
            </div>
        </div>;
    }
}
