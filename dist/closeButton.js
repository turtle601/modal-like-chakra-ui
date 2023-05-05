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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { useModalContext } from '.';
import { getCustomChildren } from './utils/getCustomChildren';
var CloseButton = function (_a) {
    var children = _a.children, isCustom = _a.isCustom;
    var closeModal = useModalContext().closeModal;
    return isCustom ? (getCustomChildren(children, { onClick: closeModal })) : (_jsx(StyledDefaultCloseButton, __assign({ onClick: closeModal }, { children: children })));
};
var StyledDefaultCloseButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  cursor: pointer;\n  width: 80px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  color: white;\n  background: #318cef;\n  border-radius: 8%;\n  &:hover {\n    background: #312cef;\n  }\n"], ["\n  border: none;\n  cursor: pointer;\n  width: 80px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  color: white;\n  background: #318cef;\n  border-radius: 8%;\n  &:hover {\n    background: #312cef;\n  }\n"])));
export default CloseButton;
var templateObject_1;
