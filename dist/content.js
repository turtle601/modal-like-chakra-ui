var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
import { useModalContext } from '.';
import { getContentLayoutStyle } from './utils/getContentLayoutStyle';
import { getCustomChildren } from './utils/getCustomChildren';
import styles from '../lib/styles/modal.module.css';
var Content = function (_a) {
    var children = _a.children, isCustom = _a.isCustom, isCenter = _a.isCenter, isBottom = _a.isBottom;
    var isModal = useModalContext().isModal;
    if (isCustom && isModal) {
        return getCustomChildren(children, {
            className: styles[getContentLayoutStyle(isCenter, isBottom)],
        });
    }
    if (!isCustom && isModal) {
        return (_jsx(StyledDisplayContent, __assign({ isCenter: isCenter, isBottom: isBottom }, { children: children })));
    }
    return _jsx(_Fragment, {});
};
var StyledDisplayContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  width: 80%;\n  min-width: 400px;\n  height: 200px;\n  background-color: #fff;\n  transform: translateX(-50%);\n  padding: 20px;\n  ", "\n  ", "\n"], ["\n  position: fixed;\n  top: 10%;\n  left: 50%;\n  width: 80%;\n  min-width: 400px;\n  height: 200px;\n  background-color: #fff;\n  transform: translateX(-50%);\n  padding: 20px;\n  ", "\n  ", "\n"])), function (props) {
    return (props.isCenter && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        top: 50%;\n        transform: translate(-50%, -50%);\n      "], ["\n        top: 50%;\n        transform: translate(-50%, -50%);\n      "]))));
}, function (props) {
    return (props.isBottom && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        top: 100%;\n        transform: translate(-50%, -100%);\n      "], ["\n        top: 100%;\n        transform: translate(-50%, -100%);\n      "]))));
});
export default Content;
var templateObject_1, templateObject_2, templateObject_3;
