const express = require('express')
const { body, validationResult } = require('express-validator')
const router = express.Router()
const Job = require('../models/Job')

router.post(
  '/',
  [
    body('company').notEmpty().withMessage('Company is required'),
    body('role').notEmpty().withMessage('Role is required'),
    body('status').isIn(['Applied', 'Interview', 'Offer', 'Rejected']).withMessage('Invalid status'),
    body('date').isISO8601().withMessage('Date must be valid'),
    body('link').optional().isURL().withMessage('Invalid link')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const job = new Job(req.body);
      await job.save();
      res.status(201).json(job);
      } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find()
    res.json(jobs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});

router.put(
  '/:id',
  [
    body('status')
      .isIn(['Applied', 'Interview', 'Offer', 'Rejected'])
      .withMessage('Invalid status')
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      res.json(job)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
);

router.delete('/:id', async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id)
    res.json({ message: 'Job deleted' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router

