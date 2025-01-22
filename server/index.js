
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();
import express from 'express'
import cors from 'cors'
import userRouts from './Router/Users.js'
import questionsRouts from './Router/Questions.js'
import answersRouts from './Router/Answers.js'
import listEndpoints  from 'express-list-endpoints';

const app = express();
app.use(express.json()); 

// CORS configuration: Allow dynamic domain based on environment (dev vs prod)


const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-react-app.netlify.app'  // Production React app URL
    : 'http://localhost:3000',               // Development React app URL
  methods: ['GET', 'POST'],
  credentials: true
};


console.log (corsOptions)
//app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors(corsOptions));


// Set the router endpoint
app.use ('/users', userRouts)
app.use ('/questions', questionsRouts)
app.use ('/answers', answersRouts)

app.get ('/', (req,res)=> {
  res.send ("The main server Running")
})

//console.log(listEndpoints(app)); 

const port = process.env.PORT || 3002;

app.listen (port, ()=>{
  console.log ("Server runnnig on port 3002")
})