import { useEffect, useState } from "react";

function useCustomPointer(initialValue) {
    const [customPointer, setCustomPointer] = useState({x: "", y: ""});

    useEffect(() => {
        const mousePos = (e) => {
            setCustomPointer({x: e.clientX, y: e.clientY});
        };

        window.addEventListener("mousemove", mousePos)

    }, []);

    return (
        <div style={{
            position: "fixed", 
            left: `${customPointer.x}px`, 
            top: `${customPointer.y}px`,
            cursor: "none"
        }}>
            {initialValue}
        </div>
    );
}

export default useCustomPointer;