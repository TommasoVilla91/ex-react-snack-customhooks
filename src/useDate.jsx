import { useEffect, useState } from "react";

function useDate() {

    const [currentDate, setCurrentDate] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const timeStamp = new Date();
            setCurrentDate(timeStamp);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return currentDate;
};

export default useDate;