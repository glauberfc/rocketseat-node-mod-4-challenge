import express from 'express'
import morgan from 'morgan'

import databaseConfig from './config/database'
import router from './router'

const app = express()
const port = 3000

databaseConfig()
app.use(morgan('dev'))
app.use(express.json())
app.use(router)

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)
