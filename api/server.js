require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BookStore = require('./models/BookModel');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(err));

app.get('/books', (req, res) => {
  BookStore.find().then((books) => res.json(books));
});

app.post('/newbook', async (req, res) => {
  try {
    const newBook = new BookStore({
      bookName: req.body.bookName,
      author: req.body.author,
      quantity: req.body.quantity,
      department: req.body.department,
      comments: req.body.comments,
    });

    const book = await newBook.save();
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await BookStore.findByIdAndDelete({ _id: id });
    console.log('book deleted');
    res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/lend/:id', async (req, res) => {
  try {
    const book = await BookStore.findById(req.params.id); // kitabı önce bulun

    if (!book) {
      return res.status(404).json({ message: 'Book not found!' });
    }

    book.quantity -= 1;

    if (book.quantity <= 0) {
      await BookStore.findByIdAndDelete(req.params.id);
      return res
        .status(200)
        .json({ message: 'Book quantity depleted and deleted!' });
    }

    await book.save();
    res.status(200).json({ message: 'Book lended successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.put('/back/:id', async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: +1 },
    });
    res.status(200).json({ message: 'Book returned successfully!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
