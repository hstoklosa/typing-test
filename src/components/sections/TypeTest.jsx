import "../../styles/TypeTest.css";

import { useState, useEffect } from "react";

const TypeTest = () => {
   const [wordType, setWordType] = useState("words");
   const [words, setWords] = useState(() => {
      return require(`../../misc/${wordType}.json`);
   });

   return (
      <section id="type-test">
         <div className="container">{/* COMING SOON */}</div>
      </section>
   );
};

export default TypeTest;
