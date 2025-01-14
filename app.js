const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',     // Replace with your MySQL host
    user: 'root',          // Replace with your MySQL username
    password: 'Eletryka.2002',          // Replace with your MySQL password
    database: 'bingo_db',  // The name of your database
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the database.');
});

// API endpoint to fetch words
app.get('/words', (req, res) => {
    const query = 'SELECT word FROM words_table';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching words:', err.message);
            res.status(500).send('Server error');
            return;
        }

        // Map the results into an array of words
        const words = results.map(row => row.word);
        res.json(words);
    });
});

// API endpoint to handle adding a word
app.post('/add-word', (req, res) => {
    const { word } = req.body;

    if (!word) {
        return res.status(400).json({ error: 'Word is required.' });
    }
    
    // Insert the word into the database
    const query = "INSERT INTO words_table (word) VALUES ('"+word+"')";
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error inserting word:', err);
            return res.status(500).json({ error: 'Failed to add word to the database.' });
        }

        console.log('Word added successfully:', word);
        res.status(200).json({ message: 'Word added successfully!' });
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
