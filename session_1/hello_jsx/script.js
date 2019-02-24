'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reactApp = document.getElementById("app-react");
var jsApp = document.getElementById("app-js");

var DateElement = function (_React$Component) {
  _inherits(DateElement, _React$Component);

  function DateElement() {
    _classCallCheck(this, DateElement);

    return _possibleConstructorReturn(this, (DateElement.__proto__ || Object.getPrototypeOf(DateElement)).apply(this, arguments));
  }

  _createClass(DateElement, [{
    key: "render",
    value: function render() {
      var dateString = new Date().toString();
      return React.createElement(
        "div",
        { className: "test" },
        "Hello React",
        React.createElement("div", null),
        React.createElement(
          "p",
          null,
          dateString
        )
      );
    }
  }]);

  return DateElement;
}(React.Component);

var render = function render() {
  jsApp.innerHTML = "\n    <div class=\"test\">\n      Hello JS\n      <div></div>\n      <p>" + new Date() + "</p>\n    </div>\n  ";
  ReactDOM.render(React.createElement(DateElement, null), reactApp);
};

setInterval(render, 1000);