# Client
## Client Dependencies
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install axios


# Server:
npm init

## Server Dependencies
npm install express mysql2 cors
npm install -g nodemon
npm install express-list-endpoints


## Database Scripts
use QAnswer;


CREATE TABLE Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name varchar(45) DEFAULT NULL,
  user_password varchar(45) DEFAULT NULL
) 

CREATE TABLE Questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(200) NOT NULL,
    body TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE Answers (
    answer_id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT,
    user_id INT,
    body TEXT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES Questions(question_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
# Project4
