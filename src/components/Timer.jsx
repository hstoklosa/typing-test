import "../styles/Timer.css";

import { useState, useEffect } from "react";

const Timer = ({ timeLeft, setInitialTime }) => {
   return (
      <section id="timer">
         <p className="time-left">{timeLeft}</p>
         <div className="radio-container" onChange={({ target }) => setInitialTime(+target.value)}>
            <div className="radio-button">
               <input type="radio" id="15" name="seconds" value="15" />
               <label htmlFor="15">15</label>
            </div>
            <div className="radio-button">
               <input type="radio" id="30" name="seconds" value="30" />
               <label htmlFor="30">30</label>
            </div>
            <div className="radio-button">
               <input type="radio" id="60" name="seconds" value="60" />
               <label htmlFor="60">60</label>
            </div>
            <div className="radio-button">
               <input type="radio" id="120" name="seconds" value="120" />
               <label htmlFor="120">120</label>
            </div>
         </div>
      </section>
   );
};

export default Timer;
