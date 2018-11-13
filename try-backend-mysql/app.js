const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('short'))

app.get('/', (req, res) => {
  res.send('Hello from Rooooooooot')
})

app.get('/user/:id', (req, res) => {
  console.log('Fetch user with id: ', req.params.id);

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'try-mysql-db'
  })
  
  connection.query('SELECT * FROM users', (err, rows, fields) => {
    console.log('fetch user successfuly')
  })

  res.end()
})

app.get('/users', (req, res) => {
  const user1 = {
    id: 1,
    name: 'test-1',
    message: 'Hello test 1 user'
  }
  // res.json(user1)
  const user2 = {
    id: 2,
    name: 'test-2',
    message: 'Hello test 2 user'
  }
  res.json([user1, user2])
})

app.listen(3003, () => {
  console.log('Server is up and listening in 3003 ...')
})
