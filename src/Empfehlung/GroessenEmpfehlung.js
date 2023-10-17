import styles from './empfehlung.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GrößenEmpfehlung({ ausgewählteAntworten, sliderValue1, sliderValue2 }) {
    const geschlecht = ausgewählteAntworten[0];
    const schultern = ausgewählteAntworten[2];
    const größeNormal = ausgewählteAntworten[3]; // Beispielantwort, ersetze sie durch die tatsächliche Antwort
    const heightValue = sliderValue1;
    const passform = sliderValue2;


    console.log(geschlecht);
    console.log("Größe :", heightValue);
    console.log(schultern);
    console.log(größeNormal);
    console.log(passform);

    const speichereAntwortenInDatenbank = () => {
      const antworten = {
        geschlecht,
        schultern,
        größeNormal,
        heightValue,
        passform,
        empfohleneGröße,
      };
      axios.post('/api/speichereAntworten', antworten)
      .then(response => {
        console.log('Antworten erfolgreich in der Datenbank gespeichert.');
      })
      .catch(error => {
        console.error('Fehler beim Speichern der Antworten: ', error);
      });
  };

    // Logik für die empfohlene Größe basierend auf den Antworten

    let empfohleneGröße = '';

    if (geschlecht === 'Männlich' && heightValue < '170' && schultern === 'schmal' && größeNormal === 'XS' &&  passform === 'Figurbetont') 
    {
      empfohleneGröße = 'S';
    }
    else if (geschlecht === 'Männlich' && heightValue >= '170' && schultern === 'durchschnitt' && größeNormal === 'M' &&  passform === 'Etwas Lockerer')
    {
      empfohleneGröße = 'M';
    }
    else {
      empfohleneGröße = 'Keine Empfehlung';
    }

    return (
        <div className={styles.größenempfehlung}>
            <h3 className={styles.empfG}>Empfohlene Größe:</h3>
            <p>{empfohleneGröße}</p>
          <button className='quizSchliessen' onClick={speichereAntwortenInDatenbank}>QUIZ SCHLIESSEN</button>
        </div>
    );
}

export default GrößenEmpfehlung;