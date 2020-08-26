const express = require('express')
const router = express.Router()

const stQuoteByID = require('../controllers/stQuoteByID')
const stQuoteBySym = require('../controllers/stQuoteBySym')

// Get quotes by ID
router.get('/id/:stid', async (req, res) => {
    try {
        const data = await stQuoteByID(req.params.stid)
        res.json(data)

    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

// Get quotes by symbol
router.get('/s/:stsym', async (req, res) => {
    try {
        const data = await stQuoteBySym(req.params.stsym)
        res.json(data)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

router.get('/', async (req, res) => {
    try {
        res.status(400).send()
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

module.exports = router