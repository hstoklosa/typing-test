import "../../styles/TypeTest.css";

import { useState, useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import { ModeSwitch, Timer } from "../index";

const TypeTest = () => {
   const [wordType, setWordType] = useState("words");
   const [words, setWords] = useState(() => require(`../../misc/${wordType}.json`));
   const [timeLeft, setInitialTime, start, restart] = useTimer();

   useEffect(() => {
      setWords(require(`../../misc/${wordType}.json`));
   }, [wordType]);

   return (
      <section id="type-test">
         <div className="container">
            <div className="type-settings">
               <ModeSwitch wordType={wordType} setWordType={setWordType} />
               <Timer timeLeft={timeLeft} setInitialTime={setInitialTime} />
            </div>

            {/* <div className="words">{}</div>
            <textarea type="text" value={userText} onChange={({ target }) => setUserText(target.value)} /> */}
         </div>
      </section>
   );
};

export default TypeTest;
