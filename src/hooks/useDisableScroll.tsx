import { useEffect } from 'react';

export const useDisableBodyScroll = (isOpen:boolean) => {
    useEffect(() => {
        if (!isOpen) {
            return;
        }
    
        const originalOverflow = document.body.style.overflow;
    
        const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    
        document.body.style.paddingRight = `${scrollBarWidth}px`;
    
        document.body.style.overflow = 'hidden';
        document.body.style.background = '#000';
    
        return () => {
        document.body.style.overflow = originalOverflow;
    
        document.body.style.paddingRight = '0px';
        };

    }, [isOpen]);
};