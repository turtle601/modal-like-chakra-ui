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
import React from 'react';
export var getCustomChildren = function (children, actionProps) {
    var child = React.Children.only(children);
    if (!React.isValidElement(child))
        throw Error('React Child is not a React Element');
    return React.cloneElement(child, __assign({}, actionProps));
};
