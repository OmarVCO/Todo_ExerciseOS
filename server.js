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

let todos = [];

app.get('/todos', (req, res) => {
  axios
    .get('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => {
      const newTodos = [...todos, ...response.data.results];
      res.status(200).json(newTodos);
      console.log(newTodos);
    });
});

// app.post('/twoot', (req, res) => {
//   if (!req.body || !req.body.newTwoot) {
//     res.status(400).send('Invalid data! Please, review the documentation.');
//   } else {
//     const { author, authorSlug, content, dateAdded } = req.body.newTwoot;
//     if (
//       !author ||
//       !author.trim() ||
//       !authorSlug ||
//       !authorSlug.trim() ||
//       !content ||
//       !content.trim() ||
//       !dateAdded ||
//       !dateAdded.trim()
//     ) {
//       res
//         .status(400)
//         .send(
//           'Invalid data! At least one of the fields is empty or missing. Please, review the data that was sent.'
//         );
//     } else {
//       const newTwoot = { ...req.body.newTwoot, _id: uuidv4() };
//       twoots = [newTwoot, ...twoots];
//       res.status(201).json(newTwoot);
//     }
//   }
// });