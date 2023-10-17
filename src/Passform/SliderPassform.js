import React, { useState } from 'react';
import styles from './frage5.module.css'

function SliderPassform({ value, onChange}) {
  const [sliderPassValue, setSliderPassValue] = useState(value || 2); // Initialwert

  const handleSliderChange1 = (e) => {
    const newValue = e.target.value; // Hier wird der Wert in der Konsole ausgegeben
    setSliderPassValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <input
         type="range"
         min="0"
         max="4"
         step="1"
         value={sliderPassValue}
         onChange={handleSliderChange1}
         className={styles.sliderpass}
        />
        </div>
        <div id={styles.sliderlabels}>
          <span style={{ visibility: 'visible' }}>FIGURBETONT</span>
          <span style={{visibility: 'visible'}}>ETWAS ENGER</span>
          <span style={{ visibility: 'visible' }}>REGULÄR</span>
          <span style={{ visibility: 'visible' }}>ETWAS LOCKERER</span>
          <span style={{ visibility: 'visible' }}>LOCKER</span>
        </div>
     </>
       
  );
}

export default SliderPassform;