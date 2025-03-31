import { useState } from "react";

function useKeyPress(initialValue) {
    const [isEnterPressed, setIsEnterPressed] = useState(false);

    window.addEventListener("keydown", (e) => {
        if(e.key === initialValue) {
            e.preventDefault();
            setIsEnterPressed(true);
        } else {
            setIsEnterPressed(false);
        };
    });

    window.addEventListener("keyup", (e) => {
        if(e.key === initialValue) {
            e.preventDefault();
            setIsEnterPressed(false);
        } else {
            setIsEnterPressed(true);
        };
    })
    
    return isEnterPressed;
};

export default useKeyPress;