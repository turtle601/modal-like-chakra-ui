var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { getCustomChildren } from './utils/getCustomChildren';
var Header = function (_a) {
    var children = _a.children, isCustom = _a.isCustom;
    return isCustom ? (getCustomChildren(children, {})) : (_jsx(StyledDefaultHeader, { children: children }));
};
var StyledDefaultHeader = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 10px;\n"], ["\n  width: 100%;\n  font-size: 18px;\n  font-weight: 700;\n  padding: 10px;\n"])));
export default Header;
var templateObject_1;
