import React, { useState } from 'react';
import styles from './frage2.module.css';

function Slider({ value, onSliderChange, unit }) {
  const [sliderValue, setSliderValue] = useState(value || 175);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    onSliderChange(newValue); // Rufe die Callback-Funktion auf, um den Wert an App.js zu übergeben
  };

  const formatValue = (value, unit) => {
    if (unit === 'ftin') {
      const feet = Math.floor(value / 30.48);
      const inches = Math.round(((value / 30.48) - feet) * 12);
      return `${feet} ft ${inches} in`;
    }
    return `${value} cm`;
  };

  return (
      <div className={styles.box}>
        <input
          type="range"
          min="140"
          max="230"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <span id={styles.rangeValue}>{formatValue(sliderValue, unit)}</span>
      </div>     
  );
}

export default Slider;
