import { render } from 'react-dom';
import React from 'react';
import './src/style.css';
import Editor from './src';

document.body.style.background = 'rgb(68,146,239)';

render(
    <div style={{ width: '90%', margin: '60px auto' }}><Editor width='100%' height={500} /></div>,
    document.getElementById('app')
);
