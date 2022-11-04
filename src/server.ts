import express from 'express';
import {config} from '../config/default';
import cors from 'cors';


const port  = config.port;
const host = config.host;

const app = express();

app.use(express.json());
// app.use(cors);
app.use(express.urlencoded({ extended: false}));

let globalI = 0;
app.get('/test', (req, res)=>{
  globalI++;
  const someValue = 'some data';
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  return res.status(200).send({someValue: globalI});
});

app.listen(port, host, () => {
  console.log(`Started server on: ${port}`)
});


export {};