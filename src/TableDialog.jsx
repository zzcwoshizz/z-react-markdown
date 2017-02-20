import React from 'react';

export default class TableDialog extends React.Component {
    render() {
        return <div className='dialog' style={{ height: 240 }}>
            <div className='dialog-title'>添加链接</div>
            <div className='dialog-content'>
                <div className='dialog-field'>
                    <span>单元格数</span>
                    <div style={{ width: '100%', marginLeft: 24 }}>
                        <span>行</span>
                        <input ref='row' style={{ width: 54, marginLeft: 10 }} type='number' min={1} defaultValue={3}/>
                        <span style={{ marginLeft: 24 }}>列</span>
                        <input ref='col' style={{ width: 54, marginLeft: 10 }} type='number' min={1} defaultValue={2} />
                    </div>
                </div>
                <div className='dialog-field'>
                    <span>对齐方式</span>
                    <div style={{ width: '100%', marginLeft: 24, display: 'flex', alignItems: 'center' }}>
                        <input type='radio' style={{ width: 13, marginLeft: 10 }} name='alignType' defaultChecked={true} value={0}/>
                        <span>平铺</span>
                        <input type='radio' style={{ width: 13, marginLeft: 10 }} name='alignType' defaultChecked={false} value={1} />
                        <span>左对齐</span>
                        <input type='radio' style={{ width: 13, marginLeft: 10 }} name='alignType' defaultChecked={false} value={2} />
                        <span>居中</span>
                        <input type='radio' style={{ width: 13, marginLeft: 10 }} name='alignType' defaultChecked={false} value={3} />
                        <span>右对齐</span>
                    </div>
                </div>
            </div>
            <div className='dialog-operation'>
                <button onClick={() => {
                    let alignType = 0;
                    for (let i = 0; i < document.getElementsByName('alignType').length; i++) {
                        if (document.getElementsByName('alignType')[i].checked) {
                            alignType = document.getElementsByName('alignType')[i].value;
                        }
                    }
                    this.props.submit({
                        row: this.refs.row.value,
                        col: this.refs.col.value,
                        alignType,
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
