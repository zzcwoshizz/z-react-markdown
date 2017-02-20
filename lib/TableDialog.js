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

var TableDialog = function (_React$Component) {
    _inherits(TableDialog, _React$Component);

    function TableDialog() {
        _classCallCheck(this, TableDialog);

        return _possibleConstructorReturn(this, (TableDialog.__proto__ || Object.getPrototypeOf(TableDialog)).apply(this, arguments));
    }

    _createClass(TableDialog, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'dialog', style: { height: 240 } },
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
                            '\u5355\u5143\u683C\u6570'
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { width: '100%', marginLeft: 24 } },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u884C'
                            ),
                            _react2.default.createElement('input', { ref: 'row', style: { width: 54, marginLeft: 10 }, type: 'number', min: 1, defaultValue: 3 }),
                            _react2.default.createElement(
                                'span',
                                { style: { marginLeft: 24 } },
                                '\u5217'
                            ),
                            _react2.default.createElement('input', { ref: 'col', style: { width: 54, marginLeft: 10 }, type: 'number', min: 1, defaultValue: 2 })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-field' },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5BF9\u9F50\u65B9\u5F0F'
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: { width: '100%', marginLeft: 24, display: 'flex', alignItems: 'center' } },
                            _react2.default.createElement('input', { type: 'radio', style: { width: 13, marginLeft: 10 }, name: 'alignType', defaultChecked: true, value: 0 }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5E73\u94FA'
                            ),
                            _react2.default.createElement('input', { type: 'radio', style: { width: 13, marginLeft: 10 }, name: 'alignType', defaultChecked: false, value: 1 }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5DE6\u5BF9\u9F50'
                            ),
                            _react2.default.createElement('input', { type: 'radio', style: { width: 13, marginLeft: 10 }, name: 'alignType', defaultChecked: false, value: 2 }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5C45\u4E2D'
                            ),
                            _react2.default.createElement('input', { type: 'radio', style: { width: 13, marginLeft: 10 }, name: 'alignType', defaultChecked: false, value: 3 }),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u53F3\u5BF9\u9F50'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-operation' },
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                var alignType = 0;
                                for (var i = 0; i < document.getElementsByName('alignType').length; i++) {
                                    if (document.getElementsByName('alignType')[i].checked) {
                                        alignType = document.getElementsByName('alignType')[i].value;
                                    }
                                }
                                _this2.props.submit({
                                    row: _this2.refs.row.value,
                                    col: _this2.refs.col.value,
                                    alignType: alignType
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

    return TableDialog;
}(_react2.default.Component);

exports.default = TableDialog;