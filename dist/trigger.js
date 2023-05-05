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
var Trigger = function (_a) {
    var children = _a.children, isCustom = _a.isCustom;
    var _b = useModalContext(), isModal = _b.isModal, closeModal = _b.closeModal, openModal = _b.openModal;
    var toggleModal = function () {
        if (isModal) {
            closeModal();
            return;
        }
        openModal();
    };
    return isCustom ? (getCustomChildren(children, { onClick: toggleModal })) : (_jsx(StyledDefaultTrigger, __assign({ onClick: toggleModal }, { children: children })));
};
var StyledDefaultTrigger = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  cursor: pointer;\n  width: 80px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background: #f2f2f2;\n  border-radius: 8%;\n  &:hover {\n    background: #e2e8f0ff;\n  }\n"], ["\n  border: none;\n  cursor: pointer;\n  width: 80px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background: #f2f2f2;\n  border-radius: 8%;\n  &:hover {\n    background: #e2e8f0ff;\n  }\n"])));
export default Trigger;
var templateObject_1;
