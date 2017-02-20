import React from 'react';

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

export default class Toolbar extends React.Component {
    render() {
        return <div className='toolbar'>
            <li title='粗体' onClick={this.props.exeCommand('b')}><B></B></li>
            <li title='删除线' onClick={this.props.exeCommand('delete')}><Delete></Delete></li>
            <li title='斜体' onClick={this.props.exeCommand('incline')}><Incline></Incline></li>
            <li title='引用' onClick={this.props.exeCommand('block')}><Block></Block></li>
            <li title='选中部分大写' onClick={this.props.exeCommand('A')}><A></A></li>
            <li title='选中部分小写' onClick={this.props.exeCommand('A1')}><A1></A1></li>
            <span></span>
            <li title='标题1' onClick={this.props.exeCommand('H1')}><H1></H1></li>
            <li title='标题2' onClick={this.props.exeCommand('H2')}><H2></H2></li>
            <li title='标题3' onClick={this.props.exeCommand('H3')}><H3></H3></li>
            <li title='标题4' onClick={this.props.exeCommand('H4')}><H4></H4></li>
            <li title='标题5' onClick={this.props.exeCommand('H5')}><H5></H5></li>
            <li title='标题6' onClick={this.props.exeCommand('H6')}><H6></H6></li>
            <span></span>
            <li title='无序列表' onClick={this.props.exeCommand('w-list')}><Wlist></Wlist></li>
            <li title='有序列表' onClick={this.props.exeCommand('y-list')}><Ylist></Ylist></li>
            <span></span>
            <li title='链接' onClick={this.props.exeCommand('link')}><Link></Link></li>
            <li title='表格' onClick={this.props.exeCommand('table')}><Table></Table></li>
            <li title='代码块' onClick={this.props.exeCommand('code')}><Code></Code></li>
            <li title='图片' onClick={this.props.exeCommand('img')}><Img></Img></li>
            <span></span>
            <li title='清空' onClick={this.props.exeCommand('empty')}><Empty></Empty></li>
        </div>;
    }
}
