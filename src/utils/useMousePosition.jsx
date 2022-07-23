import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
        mouseX: null,
        mouseY: null,
        scrolledMouseY: null
    });

    const updateMousePosition = (ev) => {
        setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY, scrolledMouseY: ev.pageY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;
