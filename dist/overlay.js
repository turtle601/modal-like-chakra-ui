var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
import { useModalContext } from '.';
var Overlay = function () {
    var _a = useModalContext(), isModal = _a.isModal, closeModal = _a.closeModal;
    window.addEventListener('keyup', function () {
        closeModal();
    });
    return isModal ? _jsx(StyledBackDrop, { onClick: closeModal }) : _jsx(_Fragment, {});
};
var StyledBackDrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0, 0.5);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0, 0.5);\n"])));
export default Overlay;
var templateObject_1;
