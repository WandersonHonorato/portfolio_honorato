import { Router } from 'express'
import { profile, techStack, experience, projects, courses } from './data.js'

const router = Router()

router.get('/profile', (req, res) => {
  res.json(profile)
})

router.get('/tech-stack', (req, res) => {
  res.json(techStack)
})

router.get('/experience', (req, res) => {
  res.json(experience)
})

router.get('/projects', (req, res) => {
  res.json(projects)
})

router.get('/courses', (req, res) => {
  res.json(courses)
})

// Endpoint único com tudo, útil pro front carregar de uma vez
router.get('/portfolio', (req, res) => {
  res.json({ profile, techStack, experience, projects, courses })
})

export default router
