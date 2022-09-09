import express from 'express';
import cors from 'cors';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('docs'));
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let todo = [];

app.get('/todos', (req, res) => {
  axios
    .get('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => {
      const newTodos = [...todo, ...response.data.results];
      res.status(200).json(newTodos);
      // console.log(newTodos);
    });
});
