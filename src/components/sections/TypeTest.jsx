import "../../styles/TypeTest.css";

import { useState, useEffect } from "react";
import { ModeSwitch } from "../index";

const TypeTest = () => {
   const [wordType, setWordType] = useState("words");
   const [words, setWords] = useState(() => {
      return require(`../../misc/${wordType}.json`);
   });

   useEffect(() => {
      setWords(require(`../../misc/${wordType}.json`));
   }, [wordType]);

   return (
      <section id="type-test">
         <div className="container">
            <ModeSwitch wordType={wordType} setWordType={setWordType} />
         </div>
      </section>
   );
};

export default TypeTest;
