CREATE DATABASE bingo_db;
USE bingo_db;

CREATE TABLE words_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(255) NOT NULL
);

INSERT INTO words_table (word) VALUES
('apple'), ('banana'), ('cherry'), ('date'), ('elderberry'),
('fig'), ('grape'), ('honeydew'), ('kiwi'), ('lemon'),
('mango'), ('nectarine'), ('orange'), ('papaya'), ('quince'),
('raspberry'), ('strawberry'), ('tangerine'), ('ugli fruit'), ('watermelon'),
('xigua'), ('yellow passionfruit'), ('zucchini'), ('blueberry'), ('cantaloupe');
