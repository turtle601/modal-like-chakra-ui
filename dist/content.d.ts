import React from 'react';
interface ChildProps {
    children: React.ReactNode;
}
interface ContentStyleProps {
    isCenter?: boolean;
    isBottom?: boolean;
}
export interface ContentProps extends ContentStyleProps, ChildProps {
    isCustom?: boolean;
}
declare const Content: React.FC<ContentProps>;
export default Content;
