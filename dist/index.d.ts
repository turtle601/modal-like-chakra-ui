import React, { PropsWithChildren } from 'react';
import { ContentProps } from './content';
import { HeaderProps } from './header';
import { BodyProps } from './body';
import { FooterProps } from './footer';
export interface CustomProps {
    children: React.ReactNode;
    isCustom?: boolean;
}
interface ModalComposition {
    Overlay: React.FC;
    Content: React.FC<ContentProps>;
    Header: React.FC<HeaderProps>;
    Body: React.FC<BodyProps>;
    Footer: React.FC<FooterProps>;
    Trigger: React.FC<CustomProps>;
    CloseButton: React.FC<CustomProps>;
}
interface ModalProps {
    isModal: boolean;
    closeModal: () => void;
    openModal: () => void;
    blockScrollOnMount?: boolean;
    closeOnOverlayClick?: boolean;
    isCenter?: boolean;
    isBottom?: boolean;
}
export declare const useModalContext: () => ModalProps;
declare const Modal: React.FC<PropsWithChildren<ModalProps>> & ModalComposition;
export default Modal;
