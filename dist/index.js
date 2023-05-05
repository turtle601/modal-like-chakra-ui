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
import React, { useContext, useEffect } from 'react';
import Overlay from './overlay';
import Content from './content';
import Trigger from './trigger';
import CloseButton from './closeButton';
import Header from './header';
import Body from './body';
import Footer from './footer';
var ModalContext = React.createContext(null);
export var useModalContext = function () {
    var modalState = useContext(ModalContext);
    if (modalState === null)
        throw new Error('ModalContext가 존재하지 않습니다.');
    return modalState;
};
var Modal = function (_a) {
    var isModal = _a.isModal, blockScrollOnMount = _a.blockScrollOnMount, closeModal = _a.closeModal, openModal = _a.openModal, isCenter = _a.isCenter, isBottom = _a.isBottom, children = _a.children;
    useEffect(function () {
        if (blockScrollOnMount) {
            document.body.style.overflow = 'hidden';
        }
        return function () {
            document.body.style.removeProperty('overflow');
        };
    }, [blockScrollOnMount]);
    return (_jsx(ModalContext.Provider, __assign({ value: {
            isModal: isModal,
            isCenter: isCenter,
            isBottom: isBottom,
            closeModal: closeModal,
            openModal: openModal,
        } }, { children: children })));
};
Modal.Overlay = Overlay;
Modal.Content = Content;
Modal.Trigger = Trigger;
Modal.CloseButton = CloseButton;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;
