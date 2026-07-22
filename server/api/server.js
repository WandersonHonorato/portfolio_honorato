import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import portfolioRoutes from './src/routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', portfolioRoutes)

app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'Wanderson Honorato Portfolio API rodando 🚀' })
})

// Na Vercel o front-end é servido como build estático separado (@vercel/static-build),
// então esse bloco só roda localmente (npm run dev) ou no deploy antigo via Hostinger.
if (!process.env.VERCEL) {
  const clientDist = path.join(__dirname, '..', 'client', 'portfolio_honorato', 'dist')
  app.use(express.static(clientDist))

  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next()

    res.sendFile(path.join(clientDist, 'index.html'), (err) => {
      if (err) return next()
    })
  })

  const PORT = process.env.PORT || 3333
  app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`)
  })
}

export default app