import React from 'react';
interface ChildProps {
    children: React.ReactNode;
}
export interface BodyProps extends ChildProps {
    isCustom?: boolean;
}
declare const Body: React.FC<BodyProps>;
export default Body;
