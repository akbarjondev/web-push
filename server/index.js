const cors = require('cors')
const express = require('express')
const pushManager = require('web-push')

const port = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(cors())

const subscribers = []

const { publicKey, privateKey } = pushManager.generateVAPIDKeys()

pushManager.setVapidDetails(
	"mailto:gimmick.data@gmail.com",
	publicKey,
	privateKey
)

app.get('/publickey', (req, res) => {

	try {
		
		res.send({
			publicKey
		}).end()

	} catch(e) {
		console.log(e)
	}

})

app.post('/subscribe', (req, res) => {

	try {

		const { subscriber } = req.body

		subscribers.push(subscriber)

		pushManager.sendNotification(subscriber, 'Obuna yoqildi!')
		
		res.send({
			status: 200
		}).end()

	} catch(e) {
		console.log(e)
	}

})

app.listen(port, () => console.log(`ready at http://localhost:${port}`))
