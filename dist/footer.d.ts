import React from 'react';
interface ChildProps {
    children: React.ReactNode;
}
export interface FooterProps extends ChildProps {
    isCustom?: boolean;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
