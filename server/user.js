const express = require('express')
const router = express.Router()

router.get('/allList', (req, res) => {
	res.json({
		name: 'css'
	})
})

module.exports = router