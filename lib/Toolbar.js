'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _H = require('./icons/H1');

var _H2 = _interopRequireDefault(_H);

var _H3 = require('./icons/H2');

var _H4 = _interopRequireDefault(_H3);

var _H5 = require('./icons/H3');

var _H6 = _interopRequireDefault(_H5);

var _H7 = require('./icons/H4');

var _H8 = _interopRequireDefault(_H7);

var _H9 = require('./icons/H5');

var _H10 = _interopRequireDefault(_H9);

var _H11 = require('./icons/H6');

var _H12 = _interopRequireDefault(_H11);

var _Table = require('./icons/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Code = require('./icons/Code');

var _Code2 = _interopRequireDefault(_Code);

var _Empty = require('./icons/Empty');

var _Empty2 = _interopRequireDefault(_Empty);

var _B = require('./icons/B');

var _B2 = _interopRequireDefault(_B);

var _Link = require('./icons/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Delete = require('./icons/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Img = require('./icons/Img');

var _Img2 = _interopRequireDefault(_Img);

var _Wlist = require('./icons/Wlist');

var _Wlist2 = _interopRequireDefault(_Wlist);

var _Incline = require('./icons/Incline');

var _Incline2 = _interopRequireDefault(_Incline);

var _Block = require('./icons/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Ylist = require('./icons/Ylist');

var _Ylist2 = _interopRequireDefault(_Ylist);

var _A = require('./icons/A1');

var _A2 = _interopRequireDefault(_A);

var _A3 = require('./icons/A');

var _A4 = _interopRequireDefault(_A3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_React$Component) {
    _inherits(Toolbar, _React$Component);

    function Toolbar() {
        _classCallCheck(this, Toolbar);

        return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
    }

    _createClass(Toolbar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'toolbar' },
                _react2.default.createElement(
                    'li',
                    { title: '\u7C97\u4F53', onClick: this.props.exeCommand('b') },
                    _react2.default.createElement(_B2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u5220\u9664\u7EBF', onClick: this.props.exeCommand('delete') },
                    _react2.default.createElement(_Delete2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u659C\u4F53', onClick: this.props.exeCommand('incline') },
                    _react2.default.createElement(_Incline2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u5F15\u7528', onClick: this.props.exeCommand('block') },
                    _react2.default.createElement(_Block2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u9009\u4E2D\u90E8\u5206\u5927\u5199', onClick: this.props.exeCommand('A') },
                    _react2.default.createElement(_A4.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u9009\u4E2D\u90E8\u5206\u5C0F\u5199', onClick: this.props.exeCommand('A1') },
                    _react2.default.createElement(_A2.default, null)
                ),
                _react2.default.createElement('span', null),
                _react2.default.createElement(
                    'li',
                    { title: '\u6807\u98981', onClick: this.props.exeCommand('H1') },
                    _react2.default.createElement(_H2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u6807\u98982', onClick: this.props.exeCommand('H2') },
                    _react2.default.createElement(_H4.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u6807\u98983', onClick: this.props.exeCommand('H3') },
                    _react2.default.createElement(_H6.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u6807\u98984', onClick: this.props.exeCommand('H4') },
                    _react2.default.createElement(_H8.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u6807\u98985', onClick: this.props.exeCommand('H5') },
                    _react2.default.createElement(_H10.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u6807\u98986', onClick: this.props.exeCommand('H6') },
                    _react2.default.createElement(_H12.default, null)
                ),
                _react2.default.createElement('span', null),
                _react2.default.createElement(
                    'li',
                    { title: '\u65E0\u5E8F\u5217\u8868', onClick: this.props.exeCommand('w-list') },
                    _react2.default.createElement(_Wlist2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u6709\u5E8F\u5217\u8868', onClick: this.props.exeCommand('y-list') },
                    _react2.default.createElement(_Ylist2.default, null)
                ),
                _react2.default.createElement('span', null),
                _react2.default.createElement(
                    'li',
                    { title: '\u94FE\u63A5', onClick: this.props.exeCommand('link') },
                    _react2.default.createElement(_Link2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u8868\u683C', onClick: this.props.exeCommand('table') },
                    _react2.default.createElement(_Table2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u4EE3\u7801\u5757', onClick: this.props.exeCommand('code') },
                    _react2.default.createElement(_Code2.default, null)
                ),
                _react2.default.createElement(
                    'li',
                    { title: '\u56FE\u7247', onClick: this.props.exeCommand('img') },
                    _react2.default.createElement(_Img2.default, null)
                ),
                _react2.default.createElement('span', null),
                _react2.default.createElement(
                    'li',
                    { title: '\u6E05\u7A7A', onClick: this.props.exeCommand('empty') },
                    _react2.default.createElement(_Empty2.default, null)
                )
            );
        }
    }]);

    return Toolbar;
}(_react2.default.Component);

exports.default = Toolbar;