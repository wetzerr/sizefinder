// In Ihrem Node.js-Server (serverpg.js)

const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sizefinder',
  password: 'paddycod01',
  port: 5432,
});

// Middleware für JSON-Daten verarbeiten
app.use(express.json());

// API-Route zum Speichern von Antworten in der Datenbank
app.post('/api/speichereAntworten', (req, res) => {
  const { geschlecht, schultern, größeNormal, heightValue, passform } = req.body;

  // Fügen Sie hier den Code ein, um die Antworten in der Datenbank zu speichern
  // Verwenden Sie das 'pool'-Objekt, um Datenbankabfragen auszuführen

  // Beispiel:
  const query = 'INSERT INTO antworten (geschlecht, schultern, groesse_normal, height_value, passform) VALUES ($1, $2, $3, $4, $5)';
  const values = [geschlecht, schultern, größeNormal, heightValue, passform];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Fehler beim Speichern der Antworten:', error);
      res.status(500).json({ message: 'Fehler beim Speichern der Antworten' });
    } else {
      res.json({ message: 'Antworten erfolgreich gespeichert' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server gestartet auf Port 3001');
});
