import React from 'react';
import './style.scss';
var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "curry-progress-bar", style: styles },
        React.createElement("div", { className: "curry-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") } },
            React.createElement("div", { className: "curry-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && React.createElement("span", { className: "inner-text" }, "".concat(percent, "%"))))));
};
// @ts-ignore
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: 'primary',
};
export default Progress;
