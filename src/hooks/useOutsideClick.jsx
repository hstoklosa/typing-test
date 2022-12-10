import { useState, useEffect } from "react";

const useOutsideClick = (ref) => {
   const [isOutside, setIsOutside] = useState(false);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
            setIsOutside(true);
            // ref.current.parentNode.classList.remove("show");
         }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref]);

   return [isOutside, setIsOutside];
};

export default useOutsideClick;
