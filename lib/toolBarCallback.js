'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var toolBarCallback = function toolBarCallback(type) {
    if (type == 'b') {
        this.editor.replaceSelection('****');
        this.editor.setCursor({
            line: this.editor.getCursor().line,
            ch: this.editor.getCursor().ch - 2
        });
    }
    if (type == 'delete') {
        this.editor.replaceSelection('~~~~');
        this.editor.setCursor({
            line: this.editor.getCursor().line,
            ch: this.editor.getCursor().ch - 2
        });
    }
    if (type == 'incline') {
        this.editor.replaceSelection('**');
        this.editor.setCursor({
            line: this.editor.getCursor().line,
            ch: this.editor.getCursor().ch - 1
        });
    }
    if (type == 'block') {
        this.editor.replaceSelection('> ');
    }
    if (type == 'A') {
        var newString = this.editor.getSelection().toUpperCase();
        var select = this.editor.listSelections()[0];
        this.editor.replaceSelection(newString);
        this.editor.addSelection(select.anchor, select.head);
    }
    if (type == 'A1') {
        var _newString = this.editor.getSelection().toLowerCase();
        var _select = this.editor.listSelections()[0];
        this.editor.replaceSelection(_newString);
        this.editor.addSelection(_select.anchor, _select.head);
    }
    if (type == 'H1') {
        this.editor.replaceSelection('# ');
    }
    if (type == 'H2') {
        this.editor.replaceSelection('## ');
    }
    if (type == 'H3') {
        this.editor.replaceSelection('### ');
    }
    if (type == 'H4') {
        this.editor.replaceSelection('#### ');
    }
    if (type == 'H5') {
        this.editor.replaceSelection('##### ');
    }
    if (type == 'H6') {
        this.editor.replaceSelection('###### ');
    }
    if (type == 'w-list') {
        if (this.editor.getCursor().ch > 0) {
            this.editor.replaceSelection('\n- ');
        } else {
            this.editor.replaceSelection('- ');
        }
    }
    if (type == 'y-list') {
        if (this.editor.getCursor().ch > 0) {
            this.editor.replaceSelection('\n1. ');
        } else {
            this.editor.replaceSelection('1. ');
        }
    }
    if (type == 'empty') {
        this.editor.setValue('');
    }
    if (type == 'code') {
        this.editor.replaceSelection('``');
        this.editor.setCursor({
            line: this.editor.getCursor().line,
            ch: this.editor.getCursor().ch - 1
        });
    }
};

exports.default = toolBarCallback;