## Client Dependencies
- npm install react-bootstrap bootstrap
- npm install react-router-dom
- npm install axios

## Server Dependencies
- npm install express mysql2 cors
- npm install -g nodemon
- npm install express-list-endpoints
- npm install dotenv


## Database Scripts
```
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
```



# Deploy Frontend on Netlify
## Step 1: Add a _redirects File
- Go to your React project's public folder.
- Inside the public folder, create a new file called _redirects.
- Add the following line to the _redirects file:
```
/* /index.html 200
```
Then in the same react folder build you code. 
- npm run build
- npx serve -s build

## Step 2: Create a Netlify Account
Go to Netlify and sign up. You can use your email, GitHub, or GitLab account.
Once signed in, you'll see the Netlify Dashboard

## Step 3: Deploy your app
- Compress the build/ folder into a .zip file.
- Go to the Netlify dashboard and click "Add New Site" > "Deploy manually".
- Drag and drop the .zip file or the build/ folder.
- Netlify will automatically upload and host your app. It will give you a live URL like https://your-app-name.netlify.app.

# Deploy Backend (Express) on Render
- Signup free on  Netlify.com
- Sign Up for Render (GitHub, GitLab, or email)
- Create a New Web Service:
- From the Render dashboard, click on "New +" and select "Web Service".
- Connect GitHub Repository.
- Select GitHub and authorize Render to access your repositories.
- Pick the repository containing your Express app.
- In the build settings, set:
- Build Command: cd server && npm install
- Start Command: cd server && node index.js
Render will automatically detect that it’s a Node.js app.

## Set Environment Variables:
If your Express app uses any environment variables (e.g., PORT, DB_URL), go to Environment settings and add them.
- MYSQL_DATABASE
- MYSQL_HOST
- MYSQL_PASSWORD
- MYSQL_PORT
- MYSQL_USER
- NODE_ENV
- PORT
Deploy Your App:

You’ll get a URL like https://your-app-name.onrender.com for your back-end.
cd server && npm install


# Deploy MySQL on railway 
1- Create Account on railway.com with your GitHub account.
2- Replace the local connection details with the remote database's connection credentials.
```
const db = mysql.createConnection({
  host: 'localhost', // Change this to the remote host (provided by your hosting platform)
  user: 'root', // Change this to the username provided by the hosting platform
  password: 'IBPfvSDukookFeBZPSEaSfBaynoMTErd', // Change this to the password provided by the hosting platform
  database: 'railway' // Change this to the database name you created on the remote service
});
```
3- Replace with Remote Database Details. For Railway you'll typically be provided with the following credentials:
host: This is the database endpoint (e.g., your-database-id.db.us-east-1.rds.amazonaws.com or database_name.clearDB.com).
user: The username for your database (e.g., admin or root).
password: The password for your database.
database: The name of your database (e.g., my_database).

4- Use Environment Variables for Better Security: It's good practice to store sensitive information (like database credentials) in environment variables instead of hardcoding them in your code. Here’s how you can update your code to use .env files. Create a .env file in your server folder with the following contents:
```
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
```

- npm install dotenv


