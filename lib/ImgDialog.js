'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImgDialog = function (_React$Component) {
    _inherits(ImgDialog, _React$Component);

    function ImgDialog() {
        _classCallCheck(this, ImgDialog);

        return _possibleConstructorReturn(this, (ImgDialog.__proto__ || Object.getPrototypeOf(ImgDialog)).apply(this, arguments));
    }

    _createClass(ImgDialog, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'dialog', style: { height: 280 } },
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-title' },
                    '\u6DFB\u52A0\u94FE\u63A5'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-field' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u56FE\u7247\u5730\u5740'
                        ),
                        _react2.default.createElement('input', { ref: 'imgSrc', defaultValue: 'http://', type: 'text' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-field' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u56FE\u7247\u63CF\u8FF0'
                        ),
                        _react2.default.createElement('input', { ref: 'imgDesc', type: 'text' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-field' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u56FE\u7247\u94FE\u63A5'
                        ),
                        _react2.default.createElement('input', { ref: 'imgLink', type: 'text' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-operation' },
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick(e) {
                                _this2.props.submit({
                                    imgSrc: _this2.refs.imgSrc.value,
                                    imgDesc: _this2.refs.imgDesc.value,
                                    imgLink: _this2.refs.imgLink.value
                                });
                                _this2.props.finally();
                            } },
                        '\u786E\u5B9A'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                (_this2.props.cancel || function () {})();
                                _this2.props.finally();
                            } },
                        '\u53D6\u6D88'
                    )
                )
            );
        }
    }]);

    return ImgDialog;
}(_react2.default.Component);

exports.default = ImgDialog;