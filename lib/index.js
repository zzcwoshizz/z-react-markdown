'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

require('codemirror/lib/codemirror.css');

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

require('codemirror/mode/markdown/markdown');

require('codemirror/addon/selection/active-line');

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Edite = require('./Edite');

var _Edite2 = _interopRequireDefault(_Edite);

var _LinkDialog = require('./LinkDialog');

var _LinkDialog2 = _interopRequireDefault(_LinkDialog);

var _ImgDialog = require('./ImgDialog');

var _ImgDialog2 = _interopRequireDefault(_ImgDialog);

var _TableDialog = require('./TableDialog');

var _TableDialog2 = _interopRequireDefault(_TableDialog);

var _toolBarCallback = require('./toolBarCallback');

var _toolBarCallback2 = _interopRequireDefault(_toolBarCallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_React$Component) {
    _inherits(Editor, _React$Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

        _this.state = {
            text: '',
            showLinkDialog: false,
            showImgDialog: false,
            showTableDialog: false
        };
        _this.editor = null;
        _this.onChange = _this.onChange.bind(_this);
        _this.buildEditor = _this.buildEditor.bind(_this);
        _this.exeCommand = _this.exeCommand.bind(_this);
        return _this;
    }

    _createClass(Editor, [{
        key: 'onChange',
        value: function onChange(text) {
            this.setState({ text: text });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                width = _props.width,
                height = _props.height;

            return _react2.default.createElement(
                'div',
                {
                    className: 'editor-container'
                },
                this.state.showLinkDialog ? _react2.default.createElement(_LinkDialog2.default, {
                    submit: function submit(_ref) {
                        var text = _ref.text,
                            link = _ref.link;

                        var str = '[' + text + '](' + link + ' "' + text + '")';
                        _this2.editor.replaceSelection(str);
                        _this2.editor.focus();
                    },
                    'finally': function _finally() {
                        _this2.setState({
                            showLinkDialog: false
                        });
                    }
                }) : null,
                this.state.showImgDialog ? _react2.default.createElement(_ImgDialog2.default, {
                    submit: function submit(_ref2) {
                        var imgSrc = _ref2.imgSrc,
                            imgDesc = _ref2.imgDesc,
                            imgLink = _ref2.imgLink;

                        if (!imgLink) {
                            var str = '![' + imgDesc + '](' + imgSrc + ' "' + imgDesc + '")';
                            _this2.editor.replaceSelection(str);
                        } else {
                            var _str = '[![' + imgDesc + '](' + imgSrc + ')](' + imgLink + ' "' + imgDesc + '")';
                            _this2.editor.replaceSelection(_str);
                        }
                        _this2.editor.focus();
                    },
                    'finally': function _finally() {
                        _this2.setState({
                            showImgDialog: false
                        });
                    }
                }) : null,
                this.state.showTableDialog ? _react2.default.createElement(_TableDialog2.default, {
                    submit: function submit(_ref3) {
                        var row = _ref3.row,
                            col = _ref3.col,
                            alignType = _ref3.alignType;

                        var str = [];
                        var str1 = '';
                        var str2 = '';
                        for (var i = 0; i < row; i++) {
                            for (var j = 0; j <= col; j++) {
                                str1 += '| ';
                            }
                            str.push(str1.slice(0, -1));
                            str1 = '';
                        }
                        if (alignType == 0) {
                            for (var _j = 0; _j < col; _j++) {
                                str2 += '|-';
                            }
                            str2 += '|';
                        } else if (alignType == 1) {
                            for (var _j2 = 0; _j2 < col; _j2++) {
                                str2 += '|:-';
                            }
                            str2 += '|';
                        } else if (alignType == 2) {
                            for (var _j3 = 0; _j3 < col; _j3++) {
                                str2 += '|:-:';
                            }
                            str2 += '|';
                        } else {
                            for (var _j4 = 0; _j4 < col; _j4++) {
                                str2 += '|-:';
                            }
                            str2 += '|';
                        }
                        str.splice(0, 1, str[0], str2);
                        _this2.editor.replaceSelection(str.join('\n') + '\n\r');
                        _this2.editor.focus();
                    },
                    'finally': function _finally() {
                        _this2.setState({
                            showTableDialog: false
                        });
                    }
                }) : null,
                _react2.default.createElement(_Toolbar2.default, { exeCommand: this.exeCommand }),
                _react2.default.createElement(
                    'div',
                    { className: 'editor-content',
                        style: { width: width, height: height }
                    },
                    _react2.default.createElement(_Edite2.default, {
                        onChange: this.onChange,
                        buildEditor: this.buildEditor
                    }),
                    _react2.default.createElement('div', {
                        className: 'editor-preview',
                        dangerouslySetInnerHTML: {
                            __html: (0, _marked2.default)(this.state.text.replace(/&nbsp;/g, ' '))
                        }
                    })
                )
            );
        }
    }, {
        key: 'exeCommand',
        value: function exeCommand(type) {
            var _this3 = this;

            return function () {
                if (type == 'link') {
                    _this3.setState({
                        showLinkDialog: true
                    });
                } else if (type == 'img') {
                    _this3.setState({
                        showImgDialog: true
                    });
                } else if (type == 'table') {
                    _this3.setState({
                        showTableDialog: true
                    });
                } else {
                    _toolBarCallback2.default.call(_this3, type);
                }
                _this3.editor.focus();
            };
        }
    }, {
        key: 'buildEditor',
        value: function buildEditor(ele) {
            var _this4 = this;

            this.editor = _codemirror2.default.fromTextArea(ele, {
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
            this.editor.on('change', function (instance, changeObj) {
                _this4.onChange(instance.getValue());
            });
        }
    }]);

    return Editor;
}(_react2.default.Component);

exports.default = Editor;