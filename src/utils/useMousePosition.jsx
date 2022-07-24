import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
        mouseX: null,
        mouseY: null,
        scrolledMouseX: null,
        scrolledMouseY: null
    });

    const updateMousePosition = (ev) => {
        setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY, scrolledMouseX: ev.pageX, scrolledMouseY: ev.pageY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;
