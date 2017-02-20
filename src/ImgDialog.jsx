import React from 'react';

export default class ImgDialog extends React.Component {
    render() {
        return <div className='dialog' style={{ height: 280 }}>
            <div className='dialog-title'>添加链接</div>
            <div className='dialog-content'>
                <div className='dialog-field'>
                    <span>图片地址</span>
                    <input ref='imgSrc' defaultValue='http://' type='text' />
                </div>
                <div className='dialog-field'>
                    <span>图片描述</span>
                    <input ref='imgDesc' type='text' />
                </div>
                <div className='dialog-field'>
                    <span>图片链接</span>
                    <input ref='imgLink' type='text' />
                </div>
            </div>
            <div className='dialog-operation'>
                <button onClick={e => {
                    this.props.submit({
                        imgSrc: this.refs.imgSrc.value,
                        imgDesc: this.refs.imgDesc.value,
                        imgLink: this.refs.imgLink.value
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
