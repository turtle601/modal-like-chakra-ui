import { useState } from 'react';
export var useCardModal = function (defaultModal) {
    var _a = useState(defaultModal), isModal = _a[0], setModal = _a[1];
    var closeModal = function () {
        setModal(false);
    };
    var openModal = function () {
        setModal(true);
    };
    return [isModal, closeModal, openModal];
};
