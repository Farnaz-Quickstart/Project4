[
  {
    question_id: 1,
    title: "What is React?",
    answers: [
      {
        answer_body: "React is a JavaScript library for building user interfaces.",
        user_id: 101,
      },
      {
        answer_body: "It is used for developing single-page applications.",
        user_id: 102,
      },
    ],
  },
  {
    question_id: 2,
    title: "How do you use useState in React?",
    answers: [
      {
        answer_body: "You use it to add state to a functional component.",
        user_id: 103,
      },
    ],
  },
  {
    question_id: 3,
    title: "What is the virtual DOM?",
    answers: [], // No answers yet
  },
];

Install Netlify
npm run build
npx serve -s build
http://localhost:3000

Method A: Drag-and-Drop Deployment


Step-by-Step Guide to Deploy Express Backend
Sign Up for Render:

Go to Render and sign up (GitHub, GitLab, or email).
Option 1: Deploying on Render
Sign Up for Render:

Go to Render and sign up (GitHub, GitLab, or email).
Create a New Web Service:

From the Render dashboard, click on "New +" and select "Web Service".
Connect GitHub Repository:

Select GitHub and authorize Render to access your repositories.
Pick the repository containing your Express app.
Set Build and Start Command:

In the build settings, set:
Build Command: npm install (or yarn if using Yarn).
Start Command: npm start (or node app.js or similar, depending on your setup).
Render will automatically detect that it’s a Node.js app.

Set Environment Variables:

If your Express app uses any environment variables (e.g., PORT, DB_URL), go to Environment settings and add them.
Deploy Your App:

Click "Create Web Service".
Render will now build and deploy your app.
You’ll get a URL like https://your-app-name.onrender.com for your back-end.
cd server && npm install
