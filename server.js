import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/test', (req, res) => {
  res.send('This is a test');
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});