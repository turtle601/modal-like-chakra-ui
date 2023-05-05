import React from 'react';
interface ChildProps {
    children: React.ReactNode;
}
export interface HeaderProps extends ChildProps {
    isCustom?: boolean;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
