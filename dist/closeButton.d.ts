import React from 'react';
interface ChildProps {
    children: React.ReactNode;
}
export interface CloseButtonProps extends ChildProps {
    isCustom?: boolean;
}
declare const CloseButton: React.FC<CloseButtonProps>;
export default CloseButton;
