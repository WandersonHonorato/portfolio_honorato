import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import portfolioRoutes from './src/routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())

app.use('/api', portfolioRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Wanderson Honorato Portfolio API rodando 🚀' })
})

// Serve o build do front-end em produção, se existir (npm run build no client)
const clientDist = path.join(__dirname, '..', 'client', 'dist')
app.use(express.static(clientDist))
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next()
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) next()
  })
})

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`)
})
