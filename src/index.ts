import express from 'express'
import { router } from './routes'
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', router)

mongoose.connect('mongodb://localhost/books').then(() => {
  console.log('Mongodb is connected.')
  app.listen(port, () => console.log(`Server listening on localhost:${port}`))
})
