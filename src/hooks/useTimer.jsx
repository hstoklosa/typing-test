import { useState, useEffect } from "react";

const useTimer = () => {
   const [initialTime, setInitialTime] = useState(15);
   const [timeLeft, setTimeLeft] = useState(initialTime);
   const [isRunning, setIsRunning] = useState(false);

   useEffect(() => {
      if (!isRunning) setTimeLeft(initialTime);
   }, [initialTime, isRunning]);

   useEffect(() => {
      if (!isRunning) return setTimeLeft(initialTime);

      const timer = setTimeout(() => {
         if (timeLeft <= 0) {
            setIsRunning(false);
         }

         setTimeLeft((prev) => (prev -= 1));
      }, 1000);

      return () => {
         clearTimeout(timer);
      };
   }, [initialTime, timeLeft, isRunning]);

   const start = () => setIsRunning(true);
   const restart = () => setIsRunning(false);

   return [timeLeft, setInitialTime, start, restart];
};

export default useTimer;
